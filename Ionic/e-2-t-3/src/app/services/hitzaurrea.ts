import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HitzaurreaComponent } from '../hitzaurrea/hitzaurrea.component';

@Injectable({
  providedIn: 'root'
})
export class HitzaurreaService {

  constructor(private modalController: ModalController) {}

  async abrirModal(servicioSeleccionado: any = null) {
    const modal = await this.modalController.create({
      component: HitzaurreaComponent,
      componentProps: {
        servicioSeleccionado: servicioSeleccionado
      },
      cssClass: 'hitzaurrea-modal',
      breakpoints: [0, 0.5, 0.8, 1],
      initialBreakpoint: 0.8,
      backdropDismiss: false
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
      console.log('Hitzordua eskatuta:', data);
      // aqui se puyede conectar la AIP
    }
    return data;
  }
}