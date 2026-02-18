import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.page.html',
  styleUrls: ['./service-form.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ServiceFormPage implements OnInit {
  service: any = {
    name: '',
    price: 0,
    home_price: 0,
    duration: 30
  };
  isEdit: boolean = false;
  loading: boolean = false;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.loadService(parseInt(id));
    }
  }

  loadService(id: number) {
    this.loading = true;
    this.apiService.getService(id).subscribe({
      next: (data) => {
        this.service = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading service:', err);
        this.loading = false;
      }
    });
  }

  saveService() {
    this.loading = true;
    const request = this.isEdit
      ? this.apiService.updateService(this.service.id, this.service)
      : this.apiService.createService(this.service);

    request.subscribe({
      next: () => {
        this.router.navigate(['/services']);
      },
      error: (err) => {
        console.error('Error saving service:', err);
        this.loading = false;
      }
    });
  }
}