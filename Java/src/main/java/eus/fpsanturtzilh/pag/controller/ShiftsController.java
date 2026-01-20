package eus.fpsanturtzilh.pag.controller;

import eus.fpsanturtzilh.pag.model.Shifts;
import eus.fpsanturtzilh.pag.service.ShiftsService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/shifts")
public class ShiftsController {

    private final ShiftsService service;

    public ShiftsController(ShiftsService service) {
        this.service = service;
    }

    @GetMapping
    public List<Shifts> getAllShifts() {
        return service.getAllShifts();
    }

    @GetMapping("/{id}")
    public Shifts getShiftById(@PathVariable int id) {
        return service.getById(id);
    }

    @PostMapping
    public Shifts createShifts(@RequestBody Shifts shift) {
        return service.saveShifts(shift);
    }

    @PutMapping("/{id}")
    public Shifts updateShifts(@PathVariable int id, @RequestBody Shifts updatedShift) {
        return service.updateShifts(id, updatedShift);
    }

    @DeleteMapping("/{id}")
    public void deleteShifts(@PathVariable int id) {
        service.deleteShifts(id);
    }
}