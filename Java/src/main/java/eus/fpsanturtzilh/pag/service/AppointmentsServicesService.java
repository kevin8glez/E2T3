package eus.fpsanturtzilh.pag.service;

import eus.fpsanturtzilh.pag.model.Appointments;
import eus.fpsanturtzilh.pag.model.AppointmentsServices;
import eus.fpsanturtzilh.pag.repository.AppointmentsServicesRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class AppointmentsServicesService {
    private final AppointmentsServicesRepository repository;

    public AppointmentsServicesService(AppointmentsServicesRepository repository) {
        this.repository = repository;
    }

    public List<AppointmentsServices> getAllAppointmentServices() {
        return repository.findAll();
    }

    public AppointmentsServices saveAppointmentServices(AppointmentsServices appointmentService) {
        return repository.save(appointmentService);
    }
    
    public void deleteAppointmentServices(int id) {
        repository.deleteById(id);
    }
    
    public AppointmentsServices updateAppointmentServices(int id, AppointmentsServices updatedAppointmentService) {
        AppointmentsServices existing = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("AppointmentsService not found with id " + id));

        existing.setAppointment(updatedAppointmentService.getAppointment());
        existing.setService(updatedAppointmentService.getService());
        existing.setComment(updatedAppointmentService.getComment());

        return repository.save(existing);
    }
    
    public AppointmentsServices getById(int id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("AppointmentsServices not found with id " + id));
    }
    
    public List<AppointmentsServices> getServicesByAppointmentId(int appointmentId) {
        return repository.findByAppointmentId(appointmentId);
    }
    
    public List<AppointmentsServices> getAppointmentsByServiceId(int serviceId) {
        return repository.findByServiceId(serviceId);
    }
}