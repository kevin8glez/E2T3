import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HitzaurreaService } from '../services/hitzaurrea';

@Component({
  selector: 'app-hasiera',
  templateUrl: 'hasiera.page.html',
  styleUrls: ['hasiera.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class HasieraPage {
  zerbitzuak = [
    { ikonoa: 'cut-outline', izena: 'Mozketak', deskribapena: 'Mozketa pertsonalizatuak' },
    { ikonoa: 'color-palette-outline', izena: 'Koloreak', deskribapena: 'Kolore eta mecha teknika modernoak' },
    { ikonoa: 'leaf-outline', izena: 'Tratamenduak', deskribapena: 'Zainketa eta hidratazioa' },
    { ikonoa: 'man-outline', izena: 'Bizarra', deskribapena: 'Bizarra eta orrazkera' }
  ];

  constructor(private hitzaurreaService: HitzaurreaService) {}

  async pedirCita() {
    await this.hitzaurreaService.abrirModal();
  }
}