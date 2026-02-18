import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../services/api';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class ClientsPage implements OnInit {
  clients: any[] = [];
  filteredClients: any[] = [];
  searchTerm: string = '';

  constructor(
    private apiService: ApiService,
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.loadClients();
  }

  loadClients() {
    this.apiService.getClients().subscribe({
      next: (data) => {
        this.clients = data;
        this.filteredClients = [...this.clients];
      },
      error: (err) => {
        console.error('Error:', err);
        this.showToast('Error al cargar clientes', 'danger');
      }
    });
  }

  filterClients() {
    if (!this.searchTerm) {
      this.filteredClients = [...this.clients];
      return;
    }
    const term = this.searchTerm.toLowerCase();
    this.filteredClients = this.clients.filter(client => 
      client.name?.toLowerCase().includes(term) ||
      client.surname?.toLowerCase().includes(term) ||
      client.phone?.includes(term) ||
      client.email?.toLowerCase().includes(term)
    );
  }

  async addClient() {
    const alert = await this.alertController.create({
      header: 'Nuevo Cliente',
      inputs: [
        { name: 'name', type: 'text', placeholder: 'Nombre' },
        { name: 'surname', type: 'text', placeholder: 'Apellidos' },
        { name: 'phone', type: 'tel', placeholder: 'Teléfono' },
        { name: 'email', type: 'email', placeholder: 'Email' },
        { 
          name: 'home_client', 
          type: 'checkbox', 
          label: 'Cliente a domicilio',
          value: 'true'
        }
      ],
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Guardar',
          handler: (data) => {
            const newClient = {
              name: data.name,
              surname: data.surname,
              phone: data.phone,
              email: data.email,
              home_client: data.home_client === 'true'
            };
            this.saveClient(newClient);
          }
        }
      ]
    });
    await alert.present();
  }

  saveClient(client: any) {
    this.apiService.createClient(client).subscribe({
      next: () => {
        this.showToast('Cliente añadido correctamente', 'success');
        this.loadClients();
      },
      error: () => {
        this.showToast('Error al añadir cliente', 'danger');
      }
    });
  }

  async editClient(client: any) {
    const alert = await this.alertController.create({
      header: 'Editar Cliente',
      inputs: [
        { name: 'name', type: 'text', value: client.name, placeholder: 'Nombre' },
        { name: 'surname', type: 'text', value: client.surname, placeholder: 'Apellidos' },
        { name: 'phone', type: 'tel', value: client.phone, placeholder: 'Teléfono' },
        { name: 'email', type: 'email', value: client.email, placeholder: 'Email' },
        { 
          name: 'home_client', 
          type: 'checkbox', 
          label: 'Cliente a domicilio',
          checked: client.home_client,
          value: 'true'
        }
      ],
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Actualizar',
          handler: (data) => {
            const updatedClient = {
              ...client,
              name: data.name,
              surname: data.surname,
              phone: data.phone,
              email: data.email,
              home_client: data.home_client === 'true'
            };
            this.updateClient(updatedClient);
          }
        }
      ]
    });
    await alert.present();
  }

  updateClient(client: any) {
    this.apiService.updateClient(client.id, client).subscribe({
      next: () => {
        this.showToast('Cliente actualizado correctamente', 'success');
        this.loadClients();
      },
      error: () => {
        this.showToast('Error al actualizar cliente', 'danger');
      }
    });
  }

  async confirmDelete(client: any) {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: `¿Eliminar a ${client.name} ${client.surname}?`,
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Eliminar',
          handler: () => {
            this.deleteClient(client.id);
          }
        }
      ]
    });
    await alert.present();
  }

  deleteClient(id: number) {
    this.apiService.deleteClient(id).subscribe({
      next: () => {
        this.showToast('Cliente eliminado', 'success');
        this.loadClients();
      },
      error: () => {
        this.showToast('Error al eliminar', 'danger');
      }
    });
  }

  async showToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: color,
      position: 'bottom'
    });
    toast.present();
  }
}