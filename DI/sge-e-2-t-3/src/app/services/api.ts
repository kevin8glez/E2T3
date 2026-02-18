import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // ================ CLIENTES ================
  getClients(): Observable<any> {
    return this.http.get(`/api/clients`);
  }

  getClient(id: number): Observable<any> {
    return this.http.get(`/api/clients/${id}`);
  }

  createClient(client: any): Observable<any> {
    return this.http.post(`/api/clients`, client);
  }

  updateClient(id: number, client: any): Observable<any> {
    return this.http.put(`/api/clients/${id}`, client);
  }

  deleteClient(id: number): Observable<any> {
    return this.http.delete(`/api/clients/${id}`);
  }

  // ================ CITAS ================
  getAppointments(): Observable<any> {
    return this.http.get(`/api/appointments`);
  }

  getAppointment(id: number): Observable<any> {
    return this.http.get(`/api/appointments/${id}`);
  }

  getAppointmentsByStudent(studentId: number): Observable<any> {
    return this.http.get(`/api/appointments/student/${studentId}`);
  }

  getAppointmentsByClient(clientId: number): Observable<any> {
    return this.http.get(`/api/appointments/client/${clientId}`);
  }

  createAppointment(appointment: any): Observable<any> {
    return this.http.post(`/api/appointments`, appointment);
  }

  updateAppointment(id: number, appointment: any): Observable<any> {
    return this.http.put(`/api/appointments/${id}`, appointment);
  }

  deleteAppointment(id: number): Observable<any> {
    return this.http.delete(`/api/appointments/${id}`);
  }

  // ================ SERVICIOS ================
  getServices(): Observable<any> {
    return this.http.get(`/api/services`);
  }

  getService(id: number): Observable<any> {
    return this.http.get(`/api/services/${id}`);
  }

  createService(service: any): Observable<any> {
    return this.http.post(`/api/services`, service);
  }

  updateService(id: number, service: any): Observable<any> {
    return this.http.put(`/api/services/${id}`, service);
  }

  deleteService(id: number): Observable<any> {
    return this.http.delete(`/api/services/${id}`);
  }

  // ================ ESTUDIANTES ================
  getStudents(): Observable<any> {
    return this.http.get(`/api/students`);
  }

  getStudent(id: number): Observable<any> {
    return this.http.get(`/api/students/${id}`);
  }

  createStudent(student: any): Observable<any> {
    return this.http.post(`/api/students`, student);
  }

  updateStudent(id: number, student: any): Observable<any> {
    return this.http.put(`/api/students/${id}`, student);
  }

  deleteStudent(id: number): Observable<any> {
    return this.http.delete(`/api/students/${id}`);
  }

  // ================ GRUPOS ================
  getGroups(): Observable<any> {
    return this.http.get(`/api/groups`);
  }

  getGroup(id: number): Observable<any> {
    return this.http.get(`/api/groups/${id}`);
  }

  createGroup(group: any): Observable<any> {
    return this.http.post(`/api/groups`, group);
  }

  updateGroup(id: number, group: any): Observable<any> {
    return this.http.put(`/api/groups/${id}`, group);
  }

  deleteGroup(id: number): Observable<any> {
    return this.http.delete(`/api/groups/${id}`);
  }

  // ================ TURNOS ================
  getShifts(): Observable<any> {
    return this.http.get(`/api/shifts`);
  }

  getShift(id: number): Observable<any> {
    return this.http.get(`/api/shifts/${id}`);
  }

  createShift(shift: any): Observable<any> {
    return this.http.post(`/api/shifts`, shift);
  }

  updateShift(id: number, shift: any): Observable<any> {
    return this.http.put(`/api/shifts/${id}`, shift);
  }

  deleteShift(id: number): Observable<any> {
    return this.http.delete(`/api/shifts/${id}`);
  }

  // ================ HORARIOS ================
  getSchedules(): Observable<any> {
    return this.http.get(`/api/schedules`);
  }

  getSchedule(id: number): Observable<any> {
    return this.http.get(`/api/schedules/${id}`);
  }

  getSchedulesByGroup(groupId: number): Observable<any> {
    return this.http.get(`/api/schedules/group/${groupId}`);
  }

  createSchedule(schedule: any): Observable<any> {
    return this.http.post(`/api/schedules`, schedule);
  }

  updateSchedule(id: number, schedule: any): Observable<any> {
    return this.http.put(`/api/schedules/${id}`, schedule);
  }

  deleteSchedule(id: number): Observable<any> {
    return this.http.delete(`/api/schedules/${id}`);
  }

  // ================ CATEGORÍAS (Productos) ================
  getCategories(): Observable<any> {
    return this.http.get(`/api/category`);
  }

  getCategory(id: number): Observable<any> {
    return this.http.get(`/api/category/${id}`);
  }

  createCategory(category: any): Observable<any> {
    return this.http.post(`/api/category`, category);
  }

  updateCategory(id: number, category: any): Observable<any> {
    return this.http.put(`/api/category/${id}`, category);
  }

  deleteCategory(id: number): Observable<any> {
    return this.http.delete(`/api/category/${id}`);
  }

  // ================ CONSUMIBLES (Productos) ================
  getConsumables(): Observable<any> {
    return this.http.get(`/api/consumables`);
  }

  getConsumable(id: number): Observable<any> {
    return this.http.get(`/api/consumables/${id}`);
  }

  createConsumable(consumable: any): Observable<any> {
    return this.http.post(`/api/consumables`, consumable);
  }

  updateConsumable(id: number, consumable: any): Observable<any> {
    return this.http.put(`/api/consumables/${id}`, consumable);
  }

  deleteConsumable(id: number): Observable<any> {
    return this.http.delete(`/api/consumables/${id}`);
  }

  // ================ EQUIPOS ================
  getEquipments(): Observable<any> {
    return this.http.get(`/api/equipments`);
  }

  getEquipment(id: number): Observable<any> {
    return this.http.get(`/api/equipments/${id}`);
  }

  createEquipment(equipment: any): Observable<any> {
    return this.http.post(`/api/equipments`, equipment);
  }

  updateEquipment(id: number, equipment: any): Observable<any> {
    return this.http.put(`/api/equipments/${id}`, equipment);
  }

  deleteEquipment(id: number): Observable<any> {
    return this.http.delete(`/api/equipments/${id}`);
  }

  // ================ STUDENTS_CONSUMABLES ================
  getStudentsConsumables(): Observable<any> {
    return this.http.get(`/api/students-consumables`);
  }

  createStudentConsumable(data: any): Observable<any> {
    return this.http.post(`/api/students-consumables`, data);
  }

  // ================ STUDENTS_EQUIPMENTS ================
  getStudentsEquipments(): Observable<any> {
    return this.http.get(`/api/students-equipments`);
  }

  createStudentEquipment(data: any): Observable<any> {
    return this.http.post(`/api/students-equipments`, data);
  }
}