import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.page.html',
  styleUrls: ['./product-form.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ProductFormPage implements OnInit {
  product: any = {
    name: '',
    category_id: null,
    descripcion: '',
    brand: '',
    batch: '',
    stock: 0,
    min_strock: 0,
    expiration_date: ''
  };
  categories: any[] = [];
  isEdit: boolean = false;
  loading: boolean = false;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadCategories();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.loadProduct(parseInt(id));
    }
  }

  loadCategories() {
    this.apiService.getCategories().subscribe({
      next: (data) => {
        this.categories = data;
      },
      error: (err) => {
        console.error('Error loading categories:', err);
      }
    });
  }

  loadProduct(id: number) {
    this.loading = true;
    this.apiService.getConsumable(id).subscribe({
      next: (data) => {
        this.product = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading product:', err);
        this.loading = false;
      }
    });
  }

  saveProduct() {
    this.loading = true;
    const request = this.isEdit
      ? this.apiService.updateConsumable(this.product.id, this.product)
      : this.apiService.createConsumable(this.product);

    request.subscribe({
      next: () => {
        this.router.navigate(['/products']);
      },
      error: (err) => {
        console.error('Error saving product:', err);
        this.loading = false;
      }
    });
  }
}