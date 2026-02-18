import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-equipment-form',
  templateUrl: './equipment-form.page.html',
  styleUrls: ['./equipment-form.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class EquipmentFormPage implements OnInit {
  equipment: any = {
    label: 'eq',
    name: '',
    brand: '',
    description: ''
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
      this.loadEquipment(parseInt(id));
    }
  }

  loadEquipment(id: number) {
    this.loading = true;
    this.apiService.getEquipment(id).subscribe({
      next: (data) => {
        this.equipment = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading equipment:', err);
        this.loading = false;
      }
    });
  }

  saveEquipment() {
    this.loading = true;
    const request = this.isEdit
      ? this.apiService.updateEquipment(this.equipment.id, this.equipment)
      : this.apiService.createEquipment(this.equipment);

    request.subscribe({
      next: () => {
        this.router.navigate(['/equipments']);
      },
      error: (err) => {
        console.error('Error saving equipment:', err);
        this.loading = false;
      }
    });
  }
}