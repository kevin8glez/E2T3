import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HitzaurreaService } from '../services/hitzaurrea';

@Component({
  selector: 'app-kontaktua',
  templateUrl: 'kontaktua.page.html',
  styleUrls: ['kontaktua.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class KontaktuaPage {
  contactInfo = {
    helbidea: 'Zabaleta kalea, 45, 20001 Donostia',
    telefonoa: '943 123 456',
    emaila: 'info@artale.eus',
    ordutegia: 'Astelehenetik Ostiralera: 9:00 - 20:00\nLarunbata: 9:00 - 14:00'
  };

  constructor(private hitzaurreaService: HitzaurreaService) {}

  sendMessage() {
    console.log('Sending message');
  }

  async pedirCita() {
    await this.hitzaurreaService.abrirModal();
  }
}