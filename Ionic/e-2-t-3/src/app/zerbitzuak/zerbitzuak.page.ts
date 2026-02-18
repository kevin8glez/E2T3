import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HitzaurreaService } from '../services/hitzaurrea';

@Component({
  selector: 'app-zerbitzuak',
  templateUrl: 'zerbitzuak.page.html',
  styleUrls: ['zerbitzuak.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class ZerbitzuakPage {
  servicios = [
    {
      categoria: 'Oinarrizko zerbitzuak',
      icono: 'cut-outline',
      items: [
        { nombre: 'Peinado', precio: '5 €', tiempo: '20 min', descripcion: 'Orrazkera edozein motatako' },
        { nombre: 'Corte', precio: '4 €', tiempo: '15 min', descripcion: 'Mozketa klasikoa' },
      ]
    },
    {
      categoria: 'Kolorea',
      icono: 'color-palette-outline',
      nota: 'Peinado barne. Laka prezioan sartuta.',
      items: [
        { nombre: 'Color corto', precio: '12 €', tiempo: '45 min', descripcion: 'Ile motzerako koloreaketa' },
        { nombre: 'Color medio', precio: '14 €', tiempo: '50 min', descripcion: 'Ile ertainerako koloreaketa' },
        { nombre: 'Color largo', precio: '16 €', tiempo: '55 min', descripcion: 'Ile luzerako koloreaketa' },
        { nombre: 'Color extralargo', precio: '18 €', tiempo: '60 min', descripcion: 'Ile oso luzerako koloreaketa' },
      ]
    },
    {
      categoria: 'Mechak partzialak',
      icono: 'color-wand-outline',
      items: [
        { nombre: 'Corto', precio: '7 €', tiempo: '40 min', descripcion: 'Mecha partzialak ile motzean' },
        { nombre: 'Medio', precio: '9 €', tiempo: '45 min', descripcion: 'Mecha partzialak ile ertainean' },
        { nombre: 'Largo', precio: '11 €', tiempo: '50 min', descripcion: 'Mecha partzialak ile luzean' },
        { nombre: 'Extralargo', precio: '13 €', tiempo: '55 min', descripcion: 'Mecha partzialak ile oso luzean' },
      ]
    },
    {
      categoria: 'Mechak osoak',
      icono: 'sparkles-outline',
      items: [
        { nombre: 'Corto', precio: '15 €', tiempo: '70 min', descripcion: 'Mecha osoak ile motzean' },
        { nombre: 'Medio', precio: '17 €', tiempo: '80 min', descripcion: 'Mecha osoak ile ertainean' },
        { nombre: 'Largo', precio: '19 €', tiempo: '90 min', descripcion: 'Mecha osoak ile luzean' },
        { nombre: 'Extralargo', precio: '21 €', tiempo: '100 min', descripcion: 'Mecha osoak ile oso luzean' },
      ]
    },
    {
      categoria: 'Mechak + kolorea',
      icono: 'brush-outline',
      items: [
        { nombre: 'Corto', precio: '25 €', tiempo: '90 min', descripcion: 'Mechak eta kolorea ile motzean' },
        { nombre: 'Medio', precio: '27 €', tiempo: '100 min', descripcion: 'Mechak eta kolorea ile ertainean' },
        { nombre: 'Largo', precio: '29 €', tiempo: '110 min', descripcion: 'Mechak eta kolorea ile luzean' },
        { nombre: 'Extralargo', precio: '31 €', tiempo: '120 min', descripcion: 'Mechak eta kolorea ile oso luzean' },
      ]
    }
  ];

  constructor(private hitzaurreaService: HitzaurreaService) {}

  async bookService(service: any) {
    await this.hitzaurreaService.abrirModal(service);
  }

  async pedirCita() {
    await this.hitzaurreaService.abrirModal();
  }
}