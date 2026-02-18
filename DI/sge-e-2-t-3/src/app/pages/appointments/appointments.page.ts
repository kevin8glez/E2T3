import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../services/api';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.page.html',
  styleUrls: ['./appointments.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class AppointmentsPage implements OnInit {
  appointments: any[] = [];
  groupedAppointments: any[] = [];
  filterType: string = 'all';
  searchTerm: string = '';

  constructor(
    private apiService: ApiService,
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.loadAppointments();
  }

  loadAppointments() {
    this.apiService.getAppointments().subscribe({
      next: (data) => {
        this.appointments = data;
        this.filterAppointments();
      },
      error: (err) => {
        console.error('Error:', err);
        this.showToast('Errorea hitzaurreak kargatzean', 'danger');
      }
    });
  }

  filterAppointments() {
    let filtered = [...this.appointments];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (this.filterType === 'today') {
      filtered = this.appointments.filter(apt => {
        const aptDate = new Date(apt.date);
        aptDate.setHours(0, 0, 0, 0);
        return aptDate.getTime() === today.getTime();
      });
    } else if (this.filterType === 'week') {
      const nextWeek = new Date(today);
      nextWeek.setDate(nextWeek.getDate() + 7);
      filtered = this.appointments.filter(apt => {
        const aptDate = new Date(apt.date);
        return aptDate >= today && aptDate <= nextWeek;
      });
    }

    this.groupedAppointments = this.groupByDate(filtered);
  }

  groupByDate(appointments: any[]): any[] {
    const groups: any = {};
    appointments.forEach(apt => {
      const date = apt.date;
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(apt);
    });

    return Object.keys(groups).map(date => ({
      date: date,
      appointments: groups[date]
    })).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }

  async addAppointment() {
    const alert = await this.alertController.create({
      header: 'Hitzaurre Berria',
      message: 'Hemen hitzaurre berri bat gehitzeko formularioa egongo da',
      buttons: ['Ados']
    });
    await alert.present();
  }

  viewAppointment(appointment: any) {
    this.showToast(appointment.name + ' ikusten', 'medium');
  }

  editAppointment(appointment: any) {
    this.showToast(appointment.name + ' editatzen', 'primary');
  }

  async confirmDelete(appointment: any) {
    const alert = await this.alertController.create({
      header: 'Baieztatu',
      message: `Ziur zaude ${appointment.name} ezabatu nahi duzula?`,
      buttons: [
        { text: 'Ezeztatu', role: 'cancel' },
        {
          text: 'Ezabatu',
          handler: () => {
            this.deleteAppointment(appointment.id);
          }
        }
      ]
    });
    await alert.present();
  }

  deleteAppointment(id: number) {
    this.apiService.deleteAppointment(id).subscribe({
      next: () => {
        this.showToast('Hitzaurrea ezabatuta', 'success');
        this.loadAppointments();
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