import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.page.html',
  styleUrls: ['./appointment-form.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AppointmentFormPage implements OnInit {
  appointment: any = {
    seat: null,
    date: '',
    start_time: '',
    end_time: '',
    comment: '',
    student_id: null,
    client_id: null,
    name: ''
  };
  students: any[] = [];
  clients: any[] = [];
  isEdit: boolean = false;
  loading: boolean = false;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadStudents();
    this.loadClients();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.loadAppointment(parseInt(id));
    }
  }

  loadStudents() {
    this.apiService.getStudents().subscribe({
      next: (data) => {
        this.students = data;
      },
      error: (err) => {
        console.error('Error loading students:', err);
      }
    });
  }

  loadClients() {
    this.apiService.getClients().subscribe({
      next: (data) => {
        this.clients = data;
      },
      error: (err) => {
        console.error('Error loading clients:', err);
      }
    });
  }

  loadAppointment(id: number) {
    this.loading = true;
    this.apiService.getAppointment(id).subscribe({
      next: (data) => {
        this.appointment = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading appointment:', err);
        this.loading = false;
      }
    });
  }

  saveAppointment() {
    this.loading = true;
    const request = this.isEdit
      ? this.apiService.updateAppointment(this.appointment.id, this.appointment)
      : this.apiService.createAppointment(this.appointment);

    request.subscribe({
      next: () => {
        this.router.navigate(['/appointments']);
      },
      error: (err) => {
        console.error('Error saving appointment:', err);
        this.loading = false;
      }
    });
  }
}