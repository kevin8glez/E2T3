import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.page.html',
  styleUrls: ['./student-form.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class StudentFormPage implements OnInit {
  student: any = {
    name: '',
    surname: '',
    group_id: null
  };
  groups: any[] = [];
  isEdit: boolean = false;
  loading: boolean = false;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadGroups();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.loadStudent(parseInt(id));
    }
  }

  loadGroups() {
    this.apiService.getGroups().subscribe({
      next: (data) => {
        this.groups = data;
      },
      error: (err) => {
        console.error('Error loading groups:', err);
      }
    });
  }

  loadStudent(id: number) {
    this.loading = true;
    this.apiService.getStudent(id).subscribe({
      next: (data) => {
        this.student = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading student:', err);
        this.loading = false;
      }
    });
  }

  saveStudent() {
    this.loading = true;
    const request = this.isEdit
      ? this.apiService.updateStudent(this.student.id, this.student)
      : this.apiService.createStudent(this.student);

    request.subscribe({
      next: () => {
        this.router.navigate(['/students']);
      },
      error: (err) => {
        console.error('Error saving student:', err);
        this.loading = false;
      }
    });
  }
}