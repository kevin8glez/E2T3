package eus.fpsanturtzilh.pag.service;

import eus.fpsanturtzilh.pag.model.Appointments;
import eus.fpsanturtzilh.pag.repository.AppointmentsRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppointmentsService {

    private final AppointmentsRepository repository;

    public AppointmentsService(AppointmentsRepository repository) {
        this.repository = repository;
    }

    public List<Appointments> getAllAppointments() {
        return repository.findAll();
    }

    public Appointments saveAppointments(Appointments appointment) {
        return repository.save(appointment);
    }
    
    public void deleteAppointments(int id) {
        repository.deleteById(id);
    }
    
    public Appointments updateAppointments(int id, Appointments updatedAppointments) {
    	Appointments existingAppointment = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Appointment not found with id " + id));

    	existingAppointment.setSeat(updatedAppointments.getSeat());
        existingAppointment.setDate(updatedAppointments.getDate());
        existingAppointment.setStartTime(updatedAppointments.getStartTime());
        existingAppointment.setEndTime(updatedAppointments.getEndTime());
        existingAppointment.setComment(updatedAppointments.getComment());
        existingAppointment.setStudent(updatedAppointments.getStudent());
        existingAppointment.setClient(updatedAppointments.getClient());
        existingAppointment.setName(updatedAppointments.getName());

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
