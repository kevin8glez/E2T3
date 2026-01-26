package eus.fpsanturtzilh.pag.controller;

import eus.fpsanturtzilh.pag.model.Schedules;
import eus.fpsanturtzilh.pag.service.SchedulesService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/schedules")
public class SchedulesController {

    private final SchedulesService service;

    public SchedulesController(SchedulesService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<Schedules>> getAllSchedules() {
        List<Schedules> schedules = service.getAllSchedules();
        return ResponseEntity.ok(schedules);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Schedules> getScheduleById(@PathVariable int id) {
        Schedules schedule = service.getById(id);
        return schedule != null 
            ? ResponseEntity.ok(schedule) 
            : ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<Schedules> createSchedules(@RequestBody Schedules schedule) {
        Schedules saved = service.saveSchedules(schedule);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Schedules> updateSchedules(@PathVariable int id, 
                                                     @RequestBody Schedules updatedSchedule) {
        Schedules updated = service.updateSchedules(id, updatedSchedule);
        return updated != null 
            ? ResponseEntity.ok(updated) 
            : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSchedules(@PathVariable int id) {
        service.deleteSchedules(id);
        return ResponseEntity.noContent().build();
    }
}