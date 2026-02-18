import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.page.html',
  styleUrls: ['./client-form.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ClientFormPage implements OnInit {
  client: any = {
    name: '',
    surname: '',
    phone: '',
    email: '',
    home_client: false
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
      this.loadClient(parseInt(id));
    }
  }

  loadClient(id: number) {
    this.loading = true;
    this.apiService.getClient(id).subscribe({
      next: (data) => {
        this.client = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading client:', err);
        this.loading = false;
      }
    });
  }

  saveClient() {
    this.loading = true;
    const request = this.isEdit
      ? this.apiService.updateClient(this.client.id, this.client)
      : this.apiService.createClient(this.client);

    request.subscribe({
      next: () => {
        this.router.navigate(['/clients']);
      },
      error: (err) => {
        console.error('Error saving client:', err);
        this.loading = false;
      }
    });
  }
}