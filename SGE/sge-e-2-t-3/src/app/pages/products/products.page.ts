import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../services/api';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class ProductsPage implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];
  groupedProducts: any[] = [];
  categories: any[] = [];
  searchTerm: string = '';

  constructor(
    private apiService: ApiService,
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    Promise.all([
      this.apiService.getConsumables().toPromise(),
      this.apiService.getCategories().toPromise()
    ]).then(([products, categories]) => {
      this.products = products;
      this.filteredProducts = [...this.products];
      this.categories = categories;
      this.groupProducts();
    }).catch(err => {
      console.error('Error:', err);
      this.showToast('Errorea produktuak kargatzean', 'danger');
    });
  }

  groupProducts() {
    const groups: any = {};
    
    groups['0'] = {
      categoryName: 'Kategoriarik gabe',
      products: []
    };

    this.filteredProducts.forEach(product => {
      const categoryId = product.category_id || 0;
      if (!groups[categoryId]) {
        const category = this.categories.find(c => c.id === categoryId);
        groups[categoryId] = {
          categoryName: category ? category.name : 'Kategoria ' + categoryId,
          products: []
        };
      }
      groups[categoryId].products.push(product);
    });

    this.groupedProducts = Object.values(groups);
  }

  filterProducts() {
    if (!this.searchTerm) {
      this.filteredProducts = [...this.products];
    } else {
      const term = this.searchTerm.toLowerCase();
      this.filteredProducts = this.products.filter(product =>
        product.name?.toLowerCase().includes(term) ||
        product.brand?.toLowerCase().includes(term) ||
        product.batch?.toLowerCase().includes(term)
      );
    }
    this.groupProducts();
  }

  async addProduct() {
    const alert = await this.alertController.create({
      header: 'Produktu Berria',
      message: 'Hemen produktu berri bat gehitzeko formularioa egongo da',
      buttons: ['Ados']
    });
    await alert.present();
  }

  viewProduct(product: any) {
    this.showToast(product.name + ' ikusten', 'medium');
  }

  editProduct(product: any) {
    this.showToast(product.name + ' editatzen', 'primary');
  }

  async confirmDelete(product: any) {
    const alert = await this.alertController.create({
      header: 'Baieztatu',
      message: `Ziur zaude ${product.name} ezabatu nahi duzula?`,
      buttons: [
        { text: 'Ezeztatu', role: 'cancel' },
        {
          text: 'Ezabatu',
          handler: () => {
            this.deleteProduct(product.id);
          }
        }
      ]
    });
    await alert.present();
  }

  deleteProduct(id: number) {
    this.apiService.deleteConsumable(id).subscribe({
      next: () => {
        this.showToast('Produktua ezabatuta', 'success');
        this.loadData();
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