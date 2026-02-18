import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-hitzaurrea',
  templateUrl: './hitzaurrea.component.html',
  styleUrls: ['./hitzaurrea.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule] // FormsModule para ngModel del formulario
})
export class HitzaurreaComponent implements OnInit {
  @Input() servicioSeleccionado: any = null;

  serviciosLista = [
    { categoria: 'Oinarrizko zerbitzuak', items: [
      { nombre: 'Peinado', tiempo: '20 min', precio: '5 €' },
      { nombre: 'Corte', tiempo: '15 min', precio: '4 €' }
    ]},
    { categoria: 'Kolorea', items: [
      { nombre: 'Color corto', tiempo: '45 min', precio: '12 €' },
      { nombre: 'Color medio', tiempo: '50 min', precio: '14 €' },
      { nombre: 'Color largo', tiempo: '55 min', precio: '16 €' },
      { nombre: 'Color extralargo', tiempo: '60 min', precio: '18 €' }
    ]},
    { categoria: 'Mechak partzialak', items: [
      { nombre: 'Corto', tiempo: '40 min', precio: '7 €' },
      { nombre: 'Medio', tiempo: '45 min', precio: '9 €' },
      { nombre: 'Largo', tiempo: '50 min', precio: '11 €' },
      { nombre: 'Extralargo', tiempo: '55 min', precio: '13 €' }
    ]},
    { categoria: 'Mechak osoak', items: [
      { nombre: 'Corto', tiempo: '70 min', precio: '15 €' },
      { nombre: 'Medio', tiempo: '80 min', precio: '17 €' },
      { nombre: 'Largo', tiempo: '90 min', precio: '19 €' },
      { nombre: 'Extralargo', tiempo: '100 min', precio: '21 €' }
    ]},
    { categoria: 'Mechak + kolorea', items: [
      { nombre: 'Corto', tiempo: '90 min', precio: '25 €' },
      { nombre: 'Medio', tiempo: '100 min', precio: '27 €' },
      { nombre: 'Largo', tiempo: '110 min', precio: '29 €' },
      { nombre: 'Extralargo', tiempo: '120 min', precio: '31 €' }
    ]},
    { categoria: 'Beste zerbitzu teknikoak', items: [
      { nombre: 'Dekorazioa (kazo)', tiempo: '10 min', precio: '4 €' },
      { nombre: 'Permanente', tiempo: '90 min', precio: '15 €' },
      { nombre: 'Alisatu iraunkorra', tiempo: '120 min', precio: '25 €' }
    ]},
    { categoria: 'Matiz eta maskarak', items: [
      { nombre: 'Kolore maskara motza', tiempo: '15 min', precio: '5 €' },
      { nombre: 'Kolore maskara luzea', tiempo: '20 min', precio: '10 €' },
      { nombre: 'Matiz motza', tiempo: '10 min', precio: '2 €' },
      { nombre: 'Matiz ertaina', tiempo: '15 min', precio: '5 €' },
      { nombre: 'Matiz luzea', tiempo: '20 min', precio: '7 €' },
      { nombre: 'Matiz extralargoa', tiempo: '25 min', precio: '9 €' }
    ]},
    { categoria: 'Manikura eta pedikura', items: [
      { nombre: 'Manikura', tiempo: '20 min', precio: '4 €' },
      { nombre: 'Manikura erdiiraunkorra', tiempo: '40 min', precio: '9 €' },
      { nombre: 'Pedikura', tiempo: '30 min', precio: '5 €' },
      { nombre: 'Parafina tratamendua', tiempo: '25 min', precio: '6 €' },
      { nombre: 'Txokolate terapia', tiempo: '25 min', precio: '6 €' }
    ]},
    { categoria: 'Ile tratamenduak', items: [
      { nombre: 'Hidratazioa', tiempo: '30 min', precio: 'Desde 8 €' },
      { nombre: 'Berregituratzailea', tiempo: '35 min', precio: 'Desde 8 €' },
      { nombre: 'Keratin Salerm', tiempo: '90 min', precio: 'Desde 35 €' },
      { nombre: 'Keratin Kerapro', tiempo: '120 min', precio: 'Desde 45 €' },
      { nombre: 'Thalassotherapy', tiempo: '40 min', precio: 'Desde 12 €' }
    ]}
  ];

  serviciosParaSelect: any[] = [];

  formData = {
    izena: '',
    emaila: '',
    telefonoa: '',
    zerbitzua: '',
    data: '',
    ordua: '',
    langilea: '',
    oharrak: ''
  };

  langileak = [
    { izena: 'Nerea', espezialitatea: 'Kolorea eta tratamenduak' },
    { izena: 'Iker', espezialitatea: 'Mozketak eta bizarra' },
    { izena: 'Leire', espezialitatea: 'Orrazkerak' },
    { izena: 'Aitor', espezialitatea: 'Tratamendu bereziak' }
  ];

  fechasDisponibles: string[] = [];
  orduakDisponibles = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
    '18:00', '18:30', '19:00', '19:30', '20:00'
  ];

  constructor(private modalController: ModalController) {}

  ngOnInit() {
    const hoy = new Date();
    for (let i = 1; i <= 30; i++) {
      const fecha = new Date(hoy);
      fecha.setDate(hoy.getDate() + i);
      this.fechasDisponibles.push(fecha.toISOString().split('T')[0]);
    }

    this.serviciosLista.forEach(categoria => {
      categoria.items.forEach(item => {
        this.serviciosParaSelect.push({
          nombre: `${categoria.categoria} - ${item.nombre}`,
          precio: item.precio
        });
      });
    });

    if (this.servicioSeleccionado) {
      const encontrado = this.serviciosParaSelect.find(
        s => s.nombre.includes(this.servicioSeleccionado.nombre)
      );
      if (encontrado) {
        this.formData.zerbitzua = encontrado.nombre;
      }
    }
  }

  dismiss() {
    this.modalController.dismiss();
  }

  submit() {
    if (this.isValid()) {
      this.modalController.dismiss(this.formData);
    }
  }

  isValid(): boolean {
    return !!(
      this.formData.izena &&
      this.formData.emaila &&
      this.formData.telefonoa &&
      this.formData.zerbitzua &&
      this.formData.data &&
      this.formData.ordua
    );
  }
}