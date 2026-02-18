import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage)
  },
  {
    path: 'clients',
    loadComponent: () => import('./pages/clients/clients.page').then(m => m.ClientsPage)
  },
  {
    path: 'client-form',
    loadComponent: () => import('./pages/client-form/client-form.page').then(m => m.ClientFormPage)
  },
  {
    path: 'client-form/:id',
    loadComponent: () => import('./pages/client-form/client-form.page').then(m => m.ClientFormPage)
  },
  {
    path: 'appointments',
    loadComponent: () => import('./pages/appointments/appointments.page').then(m => m.AppointmentsPage)
  },
  {
    path: 'appointment-form',
    loadComponent: () => import('./pages/appointment-form/appointment-form.page').then(m => m.AppointmentFormPage)
  },
  {
    path: 'appointment-form/:id',
    loadComponent: () => import('./pages/appointment-form/appointment-form.page').then(m => m.AppointmentFormPage)
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services.page').then(m => m.ServicesPage)
  },
  {
    path: 'service-form',
    loadComponent: () => import('./pages/service-form/service-form.page').then(m => m.ServiceFormPage)
  },
  {
    path: 'service-form/:id',
    loadComponent: () => import('./pages/service-form/service-form.page').then(m => m.ServiceFormPage)
  },
  {
    path: 'students',
    loadComponent: () => import('./pages/students/students.page').then(m => m.StudentsPage)
  },
  {
    path: 'student-form',
    loadComponent: () => import('./pages/student-form/student-form.page').then(m => m.StudentFormPage)
  },
  {
    path: 'student-form/:id',
    loadComponent: () => import('./pages/student-form/student-form.page').then(m => m.StudentFormPage)
  },
  {
    path: 'products',
    loadComponent: () => import('./pages/products/products.page').then(m => m.ProductsPage)
  },
  {
    path: 'product-form',
    loadComponent: () => import('./pages/product-form/product-form.page').then(m => m.ProductFormPage)
  },
  {
    path: 'product-form/:id',
    loadComponent: () => import('./pages/product-form/product-form.page').then(m => m.ProductFormPage)
  },
  {
    path: 'equipments',
    loadComponent: () => import('./pages/equipments/equipments.page').then(m => m.EquipmentsPage)
  },
  {
    path: 'equipment-form',
    loadComponent: () => import('./pages/equipment-form/equipment-form.page').then(m => m.EquipmentFormPage)
  },
  {
    path: 'equipment-form/:id',
    loadComponent: () => import('./pages/equipment-form/equipment-form.page').then(m => m.EquipmentFormPage)
  }
];