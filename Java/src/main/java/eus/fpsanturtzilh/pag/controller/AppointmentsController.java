package eus.fpsanturtzilh.pag.controller;

import eus.fpsanturtzilh.pag.model.Appointments;
import eus.fpsanturtzilh.pag.service.AppointmentsService;
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
    public List<Appointments> getAllAppointments() {
        return service.getAllAppointments();
    }

    @GetMapping("/{id}")
    public Appointments getAppointmentById(@PathVariable int id) {
        return service.getById(id);
    }

    @GetMapping("/student/{studentId}")
    public List<Appointments> getAppointmentsByStudentId(@PathVariable int studentId) {
        return service.getByStudentId(studentId);
    }

    @GetMapping("/client/{clientId}")
    public List<Appointments> getAppointmentsByClientId(@PathVariable int clientId) {
        return service.getByClientId(clientId);
    }

    @PostMapping
    public Appointments createAppointments(@RequestBody Appointments appointment) {
        return service.saveAppointments(appointment);
    }

    @PutMapping("/{id}")
    public Appointments updateAppointments(@PathVariable int id, @RequestBody Appointments updatedAppointments) {
        return service.updateAppointments(id, updatedAppointments);
    }

    @DeleteMapping("/{id}")
    public void deleteAppointments(@PathVariable int id) {
        service.deleteAppointments(id);
    }
}