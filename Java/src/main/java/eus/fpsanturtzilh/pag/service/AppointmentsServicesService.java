package eus.fpsanturtzilh.pag.service;

import eus.fpsanturtzilh.pag.model.AppointmentsServices;
import eus.fpsanturtzilh.pag.model.Appointments; 
import eus.fpsanturtzilh.pag.model.Services;
import eus.fpsanturtzilh.pag.repository.AppointmentsServicesRepository;
import eus.fpsanturtzilh.pag.repository.AppointmentsRepository; 
import eus.fpsanturtzilh.pag.repository.ServicesRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class AppointmentsServicesService {
    private final AppointmentsServicesRepository repository;
    private final AppointmentsRepository appointmentsRepository; 
    private final ServicesRepository servicesRepository;         

    public AppointmentsServicesService(AppointmentsServicesRepository repository,
                                      AppointmentsRepository appointmentsRepository,
                                      ServicesRepository servicesRepository) {
        this.repository = repository;
        this.appointmentsRepository = appointmentsRepository;
        this.servicesRepository = servicesRepository;         
    }

    public List<AppointmentsServices> getAllAppointmentServices() {
        return repository.findAll();
    }

    public AppointmentsServices saveAppointmentServices(AppointmentsServices appointmentService) {
        if (appointmentService.getAppointment() != null && appointmentService.getAppointment().getId() != 0) {
            Integer appointmentId = appointmentService.getAppointment().getId();
            Appointments fullAppointment = appointmentsRepository.findById(appointmentId)
                .orElseThrow(() -> new RuntimeException("Appointment not found with id " + appointmentId));
            appointmentService.setAppointment(fullAppointment);
        }
        
        if (appointmentService.getService() != null && appointmentService.getService().getId() != 0) {
            Integer serviceId = appointmentService.getService().getId();
            Services fullService = servicesRepository.findById(serviceId)
                .orElseThrow(() -> new RuntimeException("Service not found with id " + serviceId));
            appointmentService.setService(fullService);
        }
        
        return repository.save(appointmentService);
    }
    
    public void deleteAppointmentServices(int id) {
        repository.deleteById(id);
    }
    
    public AppointmentsServices updateAppointmentServices(int id, AppointmentsServices updatedAppointmentService) {
        AppointmentsServices existing = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("AppointmentsService not found with id " + id));

        existing.setComment(updatedAppointmentService.getComment());
        
        if (updatedAppointmentService.getAppointment() != null && updatedAppointmentService.getAppointment().getId() != 0) {
            Integer appointmentId = updatedAppointmentService.getAppointment().getId();
            Appointments fullAppointment = appointmentsRepository.findById(appointmentId)
                .orElseThrow(() -> new RuntimeException("Appointment not found with id " + appointmentId));
            existing.setAppointment(fullAppointment);
        } else {
            existing.setAppointment(updatedAppointmentService.getAppointment());
        }
        
        if (updatedAppointmentService.getService() != null && updatedAppointmentService.getService().getId() != 0) {
            Integer serviceId = updatedAppointmentService.getService().getId();
            Services fullService = servicesRepository.findById(serviceId)
                .orElseThrow(() -> new RuntimeException("Service not found with id " + serviceId));
            existing.setService(fullService);
        } else {
            existing.setService(updatedAppointmentService.getService());
        }

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