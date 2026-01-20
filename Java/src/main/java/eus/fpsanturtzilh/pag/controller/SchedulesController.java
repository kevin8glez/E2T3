package eus.fpsanturtzilh.pag.controller;

import eus.fpsanturtzilh.pag.model.Schedules;
import eus.fpsanturtzilh.pag.service.SchedulesService;
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
    public List<Schedules> getAllSchedules() {
        return service.getAllSchedules();
    }

    @GetMapping("/{id}")
    public Schedules getScheduleById(@PathVariable int id) {
        return service.getById(id);
    }

    @PostMapping
    public Schedules createSchedules(@RequestBody Schedules schedule) {
        return service.saveSchedules(schedule);
    }

    @PutMapping("/{id}")
    public Schedules updateSchedules(@PathVariable int id, @RequestBody Schedules updatedSchedule) {
        return service.updateSchedules(id, updatedSchedule);
    }

    @DeleteMapping("/{id}")
    public void deleteSchedules(@PathVariable int id) {
        service.deleteSchedules(id);
    }
}