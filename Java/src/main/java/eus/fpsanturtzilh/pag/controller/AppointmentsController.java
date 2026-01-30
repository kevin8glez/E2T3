package eus.fpsanturtzilh.pag.controller;

import eus.fpsanturtzilh.pag.model.Appointments;
import eus.fpsanturtzilh.pag.service.AppointmentsService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/appointments")
public class AppointmentsController {

    private final AppointmentsService service;

    public AppointmentsController(AppointmentsService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<Appointments>> getAllAppointments() {
        List<Appointments> appointments = service.getAllAppointments();
        return ResponseEntity.ok(appointments);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Appointments> getAppointmentById(@PathVariable int id) {
        Appointments appointment = service.getById(id);
        return appointment != null 
            ? ResponseEntity.ok(appointment) 
            : ResponseEntity.notFound().build();
    }

    @GetMapping("/student/{studentId}")
    public ResponseEntity<List<Appointments>> getAppointmentsByStudentId(@PathVariable int studentId) {
        List<Appointments> appointments = service.getByStudentId(studentId);
        return ResponseEntity.ok(appointments);
    }

    @GetMapping("/client/{clientId}")
    public ResponseEntity<List<Appointments>> getAppointmentsByClientId(@PathVariable int clientId) {
        List<Appointments> appointments = service.getByClientId(clientId);
        return ResponseEntity.ok(appointments);
    }

    @PostMapping
    public ResponseEntity<Appointments> createAppointments(@RequestBody Appointments appointment) {
        Appointments saved = service.saveAppointments(appointment);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Appointments> updateAppointments(@PathVariable int id, 
                                                           @RequestBody Appointments updatedAppointments) {
        Appointments updated = service.updateAppointments(id, updatedAppointments);
        return updated != null 
            ? ResponseEntity.ok(updated) 
            : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAppointments(@PathVariable int id) {
        service.deleteAppointments(id);
        return ResponseEntity.noContent().build();
    }
}