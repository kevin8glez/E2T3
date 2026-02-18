import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../services/api';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class ServicesPage implements OnInit {
  services: any[] = [];
  filteredServices: any[] = [];
  searchTerm: string = '';

  constructor(
    private apiService: ApiService,
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.loadServices();
  }

  loadServices() {
    this.apiService.getServices().subscribe({
      next: (data) => {
        this.services = data;
        this.filteredServices = [...this.services];
      },
      error: (err) => {
        console.error('Error:', err);
        this.showToast('Errorea zerbitzuak kargatzean', 'danger');
      }
    });
  }

  filterServices() {
    if (!this.searchTerm) {
      this.filteredServices = [...this.services];
      return;
    }
    const term = this.searchTerm.toLowerCase();
    this.filteredServices = this.services.filter(service => 
      service.name?.toLowerCase().includes(term)
    );
  }

  async addService() {
    const alert = await this.alertController.create({
      header: 'Zerbitzu Berria',
      message: 'Hemen zerbitzu berri bat gehitzeko formularioa egongo da',
      buttons: ['Ados']
    });
    await alert.present();
  }

  viewService(service: any) {
    this.showToast(service.name + ' ikusten', 'medium');
  }

  editService(service: any) {
    this.showToast(service.name + ' editatzen', 'primary');
  }

  async confirmDelete(service: any) {
    const alert = await this.alertController.create({
      header: 'Baieztatu',
      message: `Ziur zaude ${service.name} ezabatu nahi duzula?`,
      buttons: [
        { text: 'Ezeztatu', role: 'cancel' },
        {
          text: 'Ezabatu',
          handler: () => {
            this.deleteService(service.id);
          }
        }
      ]
    });
    await alert.present();
  }

  deleteService(id: number) {
    this.apiService.deleteService(id).subscribe({
      next: () => {
        this.showToast('Zerbitzua ezabatuta', 'success');
        this.loadServices();
      },
      error: () => {
        this.showToast('Errorea ezabatzean', 'danger');
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