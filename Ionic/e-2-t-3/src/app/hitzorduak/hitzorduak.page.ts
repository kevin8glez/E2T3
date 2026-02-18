import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HitzaurreaService } from '../services/hitzaurrea';

@Component({
  selector: 'app-hitzorduak',
  templateUrl: 'hitzorduak.page.html',
  styleUrls: ['hitzorduak.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class HitzorduakPage {
  hitzorduak = [
    {
      bezeroa: 'Ane Etxeberria',
      data: '2026/02/20',
      ordua: '10:30',
      zerbitzua: 'Ilea moztu + orrazkera',
      egoera: 'baieztatuta',
      kolorea: '#4caf50'
    },
    {
      bezeroa: 'Jon Arrieta',
      data: '2026/02/20',
      ordua: '12:00',
      zerbitzua: 'Kolorea',
      egoera: 'baieztatuta',
      kolorea: '#4caf50'
    },
    {
      bezeroa: 'Maialen Odriozola',
      data: '2026/02/21',
      ordua: '09:15',
      zerbitzua: 'Mechak',
      egoera: 'zain',
      kolorea: '#ff9800'
    }
  ];

  constructor(private hitzaurreaService: HitzaurreaService) {}

  async createAppointment() {
    await this.hitzaurreaService.abrirModal();
  }
}