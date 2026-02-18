import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../services/api';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class StudentsPage implements OnInit {
  students: any[] = [];
  filteredStudents: any[] = [];
  groupedStudents: any[] = [];
  groups: any[] = [];
  searchTerm: string = '';

  constructor(
    private apiService: ApiService,
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    Promise.all([
      this.apiService.getStudents().toPromise(),
      this.apiService.getGroups().toPromise()
    ]).then(([students, groups]) => {
      this.students = students;
      this.filteredStudents = [...this.students];
      this.groups = groups;
      this.groupStudents();
    }).catch(err => {
      console.error('Error:', err);
      this.showToast('Errorea ikasleak kargatzean', 'danger');
    });
  }

  groupStudents() {
    const groups: any = {};
    
    groups['0'] = {
      groupName: 'Taldearik gabe',
      students: []
    };

    this.filteredStudents.forEach(student => {
      const groupId = student.group_id || 0;
      if (!groups[groupId]) {
        const group = this.groups.find(g => g.id === groupId);
        groups[groupId] = {
          groupName: group ? group.name : 'Talda ' + groupId,
          students: []
        };
      }
      groups[groupId].students.push(student);
    });

    this.groupedStudents = Object.values(groups);
  }

  filterStudents() {
    if (!this.searchTerm) {
      this.filteredStudents = [...this.students];
    } else {
      const term = this.searchTerm.toLowerCase();
      this.filteredStudents = this.students.filter(student =>
        student.name?.toLowerCase().includes(term) ||
        student.surname?.toLowerCase().includes(term)
      );
    }
    this.groupStudents();
  }

  async addStudent() {
    const alert = await this.alertController.create({
      header: 'Ikasle Berria',
      message: 'Hemen ikasle berri bat gehitzeko formularioa egongo da',
      buttons: ['Ados']
    });
    await alert.present();
  }

  viewStudent(student: any) {
    this.showToast(student.name + ' ' + student.surname + ' ikusten', 'medium');
  }

  editStudent(student: any) {
    this.showToast(student.name + ' ' + student.surname + ' editatzen', 'primary');
  }

  async confirmDelete(student: any) {
    const alert = await this.alertController.create({
      header: 'Baieztatu',
      message: `Ziur zaude ${student.name} ${student.surname} ezabatu nahi duzula?`,
      buttons: [
        { text: 'Ezeztatu', role: 'cancel' },
        {
          text: 'Ezabatu',
          handler: () => {
            this.deleteStudent(student.id);
          }
        }
      ]
    });
    await alert.present();
  }

  deleteStudent(id: number) {
    this.apiService.deleteStudent(id).subscribe({
      next: () => {
        this.showToast('Ikaslea ezabatuta', 'success');
        this.loadData();
      },
      error: () => {
        this.showToast('Errorea ezabatzean', 'danger');
      }
    });
  }

  async showToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: color,
      position: 'bottom'
    });
    toast.present();
  }
}