package eus.fpsanturtzilh.pag.controller;

import eus.fpsanturtzilh.pag.model.Shifts;
import eus.fpsanturtzilh.pag.service.ShiftsService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<List<Shifts>> getAllShifts() {
        List<Shifts> shifts = service.getAllShifts();
        return ResponseEntity.ok(shifts);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Shifts> getShiftById(@PathVariable int id) {
        Shifts shift = service.getById(id);
        return shift != null 
            ? ResponseEntity.ok(shift) 
            : ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<Shifts> createShifts(@RequestBody Shifts shift) {
        Shifts saved = service.saveShifts(shift);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Shifts> updateShifts(@PathVariable int id, 
                                               @RequestBody Shifts updatedShift) {
        Shifts updated = service.updateShifts(id, updatedShift);
        return updated != null 
            ? ResponseEntity.ok(updated) 
            : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteShifts(@PathVariable int id) {
        service.deleteShifts(id);
        return ResponseEntity.noContent().build();
    }
}