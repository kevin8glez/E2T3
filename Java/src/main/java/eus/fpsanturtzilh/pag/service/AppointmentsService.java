package eus.fpsanturtzilh.pag.service;

import eus.fpsanturtzilh.pag.model.Appointments;
import eus.fpsanturtzilh.pag.model.Students; 
import eus.fpsanturtzilh.pag.model.Clients;
import eus.fpsanturtzilh.pag.repository.AppointmentsRepository;
import eus.fpsanturtzilh.pag.repository.StudentsRepository; 
import eus.fpsanturtzilh.pag.repository.ClientsRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppointmentsService {

    private final AppointmentsRepository repository;
    private final StudentsRepository studentsRepository; 
    private final ClientsRepository clientsRepository;  

    public AppointmentsService(AppointmentsRepository repository, 
                               StudentsRepository studentsRepository,
                               ClientsRepository clientsRepository) {
        this.repository = repository;
        this.studentsRepository = studentsRepository;
        this.clientsRepository = clientsRepository;  
    }

    public List<Appointments> getAllAppointments() {
        return repository.findAll();
    }

    public Appointments saveAppointments(Appointments appointment) {
        if (appointment.getStudent() != null && appointment.getStudent().getId() != 0) {
            Integer studentId = appointment.getStudent().getId();
            Students fullStudent = studentsRepository.findById(studentId)
                .orElseThrow(() -> new RuntimeException("Student not found with id " + studentId));
            appointment.setStudent(fullStudent);
        }
        
        if (appointment.getClient() != null && appointment.getClient().getId() != 0) {
            Integer clientId = appointment.getClient().getId();
            Clients fullClient = clientsRepository.findById(clientId)
                .orElseThrow(() -> new RuntimeException("Client not found with id " + clientId));
            appointment.setClient(fullClient);
        }
        
        return repository.save(appointment);
    }
    
    public void deleteAppointments(int id) {
        repository.deleteById(id);
    }
    
    // MÉTODO MODIFICADO
    public Appointments updateAppointments(int id, Appointments updatedAppointments) {
        Appointments existingAppointment = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Appointment not found with id " + id));

        existingAppointment.setSeat(updatedAppointments.getSeat());
        existingAppointment.setDate(updatedAppointments.getDate());
        existingAppointment.setStartTime(updatedAppointments.getStartTime());
        existingAppointment.setEndTime(updatedAppointments.getEndTime());
        existingAppointment.setComment(updatedAppointments.getComment());
        existingAppointment.setName(updatedAppointments.getName());
        
        if (updatedAppointments.getStudent() != null && updatedAppointments.getStudent().getId() != 0) {
            Integer studentId = updatedAppointments.getStudent().getId();
            Students fullStudent = studentsRepository.findById(studentId)
                .orElseThrow(() -> new RuntimeException("Student not found with id " + studentId));
            existingAppointment.setStudent(fullStudent);
        } else {
            existingAppointment.setStudent(updatedAppointments.getStudent());
        }
        
        if (updatedAppointments.getClient() != null && updatedAppointments.getClient().getId() != 0) {
            Integer clientId = updatedAppointments.getClient().getId();
            Clients fullClient = clientsRepository.findById(clientId)
                .orElseThrow(() -> new RuntimeException("Client not found with id " + clientId));
            existingAppointment.setClient(fullClient);
        } else {
            existingAppointment.setClient(updatedAppointments.getClient());
        }

        return repository.save(existingAppointment);
    }
    
    public Appointments getById(int id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Appointment not found with id " + id));
    }
    
    public List<Appointments> getByStudentId(int studentId) {
        return repository.findByStudentId(studentId);
    }
    
    public List<Appointments> getByClientId(int clientId) {
        return repository.findByClientId(clientId);
    }
}