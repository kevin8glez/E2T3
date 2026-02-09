import { Component } from '@angular/core';

@Component({
  selector: 'app-zerbitzuak',
  templateUrl: 'zerbitzuak.page.html',
  styleUrls: ['zerbitzuak.page.scss'],
  standalone: false,
})
export class ZerbitzuakPage {

  servicios = [
    {
      categoria: 'Servicios básicos',
      items: [
        { nombre: 'Peinado', precio: '5 €', tiempo: '20 min' },
        { nombre: 'Corte', precio: '4 €', tiempo: '15 min' },
      ]
    },
    {
      categoria: 'Color',
      nota: 'Incluye peinado. La laca está incluida en el precio.',
      items: [
        { nombre: 'Color corto', precio: '12 €', tiempo: '45 min' },
        { nombre: 'Color medio', precio: '14 €', tiempo: '50 min' },
        { nombre: 'Color largo', precio: '16 €', tiempo: '55 min' },
        { nombre: 'Color extralargo', precio: '18 €', tiempo: '60 min' },
      ]
    },
    {
      categoria: 'Mechas parciales',
      items: [
        { nombre: 'Corto', precio: '7 €', tiempo: '40 min' },
        { nombre: 'Medio', precio: '9 €', tiempo: '45 min' },
        { nombre: 'Largo', precio: '11 €', tiempo: '50 min' },
        { nombre: 'Extralargo', precio: '13 €', tiempo: '55 min' },
      ]
    },
    {
      categoria: 'Mechas completas',
      items: [
        { nombre: 'Corto', precio: '15 €', tiempo: '70 min' },
        { nombre: 'Medio', precio: '17 €', tiempo: '80 min' },
        { nombre: 'Largo', precio: '19 €', tiempo: '90 min' },
        { nombre: 'Extralargo', precio: '21 €', tiempo: '100 min' },
      ]
    },
    {
      categoria: 'Mechas + color',
      items: [
        { nombre: 'Corto', precio: '25 €', tiempo: '90 min' },
        { nombre: 'Medio', precio: '27 €', tiempo: '100 min' },
        { nombre: 'Largo', precio: '29 €', tiempo: '110 min' },
        { nombre: 'Extralargo', precio: '31 €', tiempo: '120 min' },
      ]
    },
    {
      categoria: 'Otros servicios técnicos',
      items: [
        { nombre: 'Decoración (cazo)', precio: '4 €', tiempo: '10 min' },
        { nombre: 'Permanente', precio: '15 €', tiempo: '90 min' },
        { nombre: 'Alisado permanente', precio: '25 €', tiempo: '120 min' },
      ]
    },
    {
      categoria: 'Matiz y mascarillas',
      items: [
        { nombre: 'Mascarilla color corto', precio: '5 €', tiempo: '15 min' },
        { nombre: 'Mascarilla color largo', precio: '10 €', tiempo: '20 min' },
        { nombre: 'Matiz corto', precio: '2 €', tiempo: '10 min' },
        { nombre: 'Matiz medio', precio: '5 €', tiempo: '15 min' },
        { nombre: 'Matiz largo', precio: '7 €', tiempo: '20 min' },
        { nombre: 'Matiz extralargo', precio: '9 €', tiempo: '25 min' },
      ]
    },
    {
      categoria: 'Manicura y pedicura',
      items: [
        { nombre: 'Manicura', precio: '4 €', tiempo: '20 min' },
        { nombre: 'Manicura semipermanente', precio: '9 €', tiempo: '40 min' },
        { nombre: 'Pedicura', precio: '5 €', tiempo: '30 min' },
        { nombre: 'Tratamiento de parafina', precio: '6 €', tiempo: '25 min' },
        { nombre: 'Chocolaterapia', precio: '6 €', tiempo: '25 min' },
      ]
    },
    {
      categoria: 'Tratamientos capilares',
      items: [
        { nombre: 'Hidratación', precio: 'Desde 8 €', tiempo: '30 min' },
        { nombre: 'Reconstruct', precio: 'Desde 8 €', tiempo: '35 min' },
        { nombre: 'Keratina Salerm', precio: 'Desde 35 €', tiempo: '90 min' },
        { nombre: 'Keratina Kerapro', precio: 'Desde 45 €', tiempo: '120 min' },
        { nombre: 'Thalassotherapy', precio: 'Desde 12 €', tiempo: '40 min' },
      ]
    }
  ];

}
