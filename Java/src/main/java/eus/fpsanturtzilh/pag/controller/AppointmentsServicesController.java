package eus.fpsanturtzilh.pag.controller;

import eus.fpsanturtzilh.pag.model.AppointmentsServices;
import eus.fpsanturtzilh.pag.service.AppointmentsServicesService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/appointment-services")
public class AppointmentsServicesController {

    private final AppointmentsServicesService service;

    public AppointmentsServicesController(AppointmentsServicesService service) {
        this.service = service;
    }

    @GetMapping
    public List<AppointmentsServices> getAllAppointmentServices() {
        return service.getAllAppointmentServices();
    }

    @GetMapping("/{id}")
    public AppointmentsServices getAppointmentServiceById(@PathVariable int id) {
        return service.getById(id);
    }

    @GetMapping("/appointment/{appointmentId}")
    public List<AppointmentsServices> getServicesByAppointmentId(@PathVariable int appointmentId) {
        return service.getServicesByAppointmentId(appointmentId);
    }

    @GetMapping("/service/{serviceId}")
    public List<AppointmentsServices> getAppointmentsByServiceId(@PathVariable int serviceId) {
        return service.getAppointmentsByServiceId(serviceId);
    }

    @PostMapping
    public AppointmentsServices createAppointmentService(@RequestBody AppointmentsServices appointmentService) {
        return service.saveAppointmentServices(appointmentService);
    }

    @PutMapping("/{id}")
    public AppointmentsServices updateAppointmentService(@PathVariable int id, 
                                                         @RequestBody AppointmentsServices updatedAppointmentService) {
        return service.updateAppointmentServices(id, updatedAppointmentService);
    }

    @DeleteMapping("/{id}")
    public void deleteAppointmentService(@PathVariable int id) {
        service.deleteAppointmentServices(id);
    }
}