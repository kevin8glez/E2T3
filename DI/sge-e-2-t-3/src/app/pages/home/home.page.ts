import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink]
})
export class HomePage implements OnInit {
  menuItems = [
    { title: 'Bezeroak', icon: 'people-outline', description: 'Bezeroen kudeaketa', route: '/clients' },
    { title: 'Hitzorduak', icon: 'calendar-outline', description: 'Hitzorduen kudeaketa', route: '/appointments' },
    { title: 'Zerbitzuak', icon: 'cut-outline', description: 'Eskainitako zerbitzuak', route: '/services' },
    { title: 'Ikasleak', icon: 'school-outline', description: 'Ikasleen kudeaketa', route: '/students' },
    { title: 'Produktuak', icon: 'basket-outline', description: 'Produktuen inbentarioa', route: '/products' },
    { title: 'Ekipamendua', icon: 'construct-outline', description: 'Tresneria eta ekipamendua', route: '/equipments' }
  ];

  apiStatus: string = 'Egiaztatzen...';
  apiColor: string = 'warning';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.checkApiConnection();
  }

  checkApiConnection() {
    this.apiService.getClients().subscribe(
      (response) => {
        console.log('API ONDO:', response);
        this.apiStatus = 'API konektatuta';
        this.apiColor = 'success';
      },
      (error) => {
        console.error('API ERROREA:', error);
        this.apiStatus = 'API ez dago erabilgarri';
        this.apiColor = 'danger';
      }
    );
  }
}
