import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../services/api';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.page.html',
  styleUrls: ['./equipments.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class EquipmentsPage implements OnInit {
  equipments: any[] = [];
  filteredEquipments: any[] = [];
  groupedEquipments: any[] = [];
  searchTerm: string = '';

  constructor(
    private apiService: ApiService,
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.loadEquipments();
  }

  loadEquipments() {
    this.apiService.getEquipments().subscribe({
      next: (data) => {
        this.equipments = data;
        this.filteredEquipments = [...this.equipments];
        this.groupEquipments();
      },
      error: (err) => {
        console.error('Error:', err);
        this.showToast('Errorea ekipoak kargatzean', 'danger');
      }
    });
  }

  groupEquipments() {
    const groups: any = {};
    this.filteredEquipments.forEach(equipment => {
      const label = equipment.label || 'Etiketarik gabe';
      if (!groups[label]) {
        groups[label] = {
          labelName: this.formatLabel(label),
          equipments: []
        };
      }
      groups[label].equipments.push(equipment);
    });
    this.groupedEquipments = Object.values(groups);
  }

  formatLabel(label: string): string {
    const labels: any = {
      'eq': 'Ekipo Elektrikoak',
      'tool': 'Eskuzko Tresnak',
      'furniture': 'Altxariak',
      'Etiketarik gabe': 'Sailkatu gabe'
    };
    return labels[label] || label;
  }

  filterEquipments() {
    if (!this.searchTerm) {
      this.filteredEquipments = [...this.equipments];
    } else {
      const term = this.searchTerm.toLowerCase();
      this.filteredEquipments = this.equipments.filter(equipment =>
        equipment.name?.toLowerCase().includes(term) ||
        equipment.brand?.toLowerCase().includes(term) ||
        equipment.description?.toLowerCase().includes(term)
      );
    }
    this.groupEquipments();
  }

  async addEquipment() {
    const alert = await this.alertController.create({
      header: 'Ekipo Berria',
      message: 'Hemen ekipo berri bat gehitzeko formularioa egongo da',
      buttons: ['Ados']
    });
    await alert.present();
  }

  viewEquipment(equipment: any) {
    this.showToast(equipment.name + ' ikusten', 'medium');
  }

  editEquipment(equipment: any) {
    this.showToast(equipment.name + ' editatzen', 'primary');
  }

  async confirmDelete(equipment: any) {
    const alert = await this.alertController.create({
      header: 'Baieztatu',
      message: `Ziur zaude ${equipment.name} ezabatu nahi duzula?`,
      buttons: [
        { text: 'Ezeztatu', role: 'cancel' },
        {
          text: 'Ezabatu',
          handler: () => {
            this.deleteEquipment(equipment.id);
          }
        }
      ]
    });
    await alert.present();
  }

  deleteEquipment(id: number) {
    this.apiService.deleteEquipment(id).subscribe({
      next: () => {
        this.showToast('Ekipoa ezabatuta', 'success');
        this.loadEquipments();
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