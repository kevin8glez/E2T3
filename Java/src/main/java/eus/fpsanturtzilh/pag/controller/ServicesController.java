package eus.fpsanturtzilh.pag.controller;

import eus.fpsanturtzilh.pag.model.Services;
import eus.fpsanturtzilh.pag.service.ServicesService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/services")
public class ServicesController {

    private final ServicesService service;

    public ServicesController(ServicesService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<Services>> getAllServices() {
        List<Services> services = service.getAllServices();
        return ResponseEntity.ok(services);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Services> getServiceById(@PathVariable int id) {
        Services serviceObj = service.getById(id);
        return serviceObj != null 
            ? ResponseEntity.ok(serviceObj) 
            : ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<Services> createServices(@RequestBody Services serviceObj) {
        Services saved = service.saveServices(serviceObj);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Services> updateServices(@PathVariable int id, 
                                                   @RequestBody Services updatedService) {
        Services updated = service.updateServices(id, updatedService);
        return updated != null 
            ? ResponseEntity.ok(updated) 
            : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteServices(@PathVariable int id) {
        service.deleteServices(id);
        return ResponseEntity.noContent().build();
    }
}