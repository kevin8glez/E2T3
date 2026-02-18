import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HitzaurreaService } from '../services/hitzaurrea';

@Component({
  selector: 'app-langileak',
  templateUrl: 'langileak.page.html',
  styleUrls: ['langileak.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class LangileakPage {
  langileak = [
    {
      izena: 'Nerea',
      espezialitatea: 'Kolorea eta tratamenduak',
      argazkia: 'https://i.pravatar.cc/300?img=48',
      esperientzia: '8 urte',
      bio: 'Koloreen aditua, teknikarik aurreratuenak erabiltzen ditu'
    },
    {
      izena: 'Iker',
      espezialitatea: 'Mozketak eta bizarra',
      argazkia: 'https://i.pravatar.cc/300?img=14',
      esperientzia: '5 urte',
      bio: 'Mozketa moderno eta klasikoetan espezialista'
    },
    {
      izena: 'Leire',
      espezialitatea: 'Orrazkerak',
      argazkia: 'https://i.pravatar.cc/300?img=32',
      esperientzia: '10 urte',
      bio: 'Ezkontza eta ekitaldietako orrazkeretan aditua'
    },
    {
      izena: 'Aitor',
      espezialitatea: 'Tratamendu bereziak',
      argazkia: 'https://i.pravatar.cc/300?img=56',
      esperientzia: '6 urte',
      bio: 'Keratina eta ile tratamenduetan espezialista'
    }
  ];

  constructor(private hitzaurreaService: HitzaurreaService) {}

  async selectWorker(langilea: any) {
    await this.hitzaurreaService.abrirModal({ langilea: langilea.izena });
  }

  async pedirCita() {
    await this.hitzaurreaService.abrirModal();
  }
}