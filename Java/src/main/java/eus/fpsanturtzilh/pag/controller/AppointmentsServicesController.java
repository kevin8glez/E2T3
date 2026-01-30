package eus.fpsanturtzilh.pag.controller;

import eus.fpsanturtzilh.pag.model.AppointmentsServices;
import eus.fpsanturtzilh.pag.service.AppointmentsServicesService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<List<AppointmentsServices>> getAllAppointmentServices() {
        List<AppointmentsServices> appointmentServices = service.getAllAppointmentServices();
        return ResponseEntity.ok(appointmentServices);
    }

    @GetMapping("/{id}")
    public ResponseEntity<AppointmentsServices> getAppointmentServiceById(@PathVariable int id) {
        AppointmentsServices appointmentService = service.getById(id);
        return appointmentService != null 
            ? ResponseEntity.ok(appointmentService) 
            : ResponseEntity.notFound().build();
    }

    @GetMapping("/appointment/{appointmentId}")
    public ResponseEntity<List<AppointmentsServices>> getServicesByAppointmentId(@PathVariable int appointmentId) {
        List<AppointmentsServices> services = service.getServicesByAppointmentId(appointmentId);
        return ResponseEntity.ok(services);
    }

    @GetMapping("/service/{serviceId}")
    public ResponseEntity<List<AppointmentsServices>> getAppointmentsByServiceId(@PathVariable int serviceId) {
        List<AppointmentsServices> appointments = service.getAppointmentsByServiceId(serviceId);
        return ResponseEntity.ok(appointments);
    }

    @PostMapping
    public ResponseEntity<AppointmentsServices> createAppointmentService(@RequestBody AppointmentsServices appointmentService) {
        AppointmentsServices saved = service.saveAppointmentServices(appointmentService);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    @PutMapping("/{id}")
    public ResponseEntity<AppointmentsServices> updateAppointmentService(@PathVariable int id, 
                                                                         @RequestBody AppointmentsServices updatedAppointmentService) {
        AppointmentsServices updated = service.updateAppointmentServices(id, updatedAppointmentService);
        return updated != null 
            ? ResponseEntity.ok(updated) 
            : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAppointmentService(@PathVariable int id) {
        service.deleteAppointmentServices(id);
        return ResponseEntity.noContent().build();
    }
}