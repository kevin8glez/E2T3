package eus.fpsanturtzilh.pag.controller;

import eus.fpsanturtzilh.pag.model.Services;
import eus.fpsanturtzilh.pag.service.ServicesService;
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
    public List<Services> getAllServices() {
        return service.getAllServices();
    }

    @GetMapping("/{id}")
    public Services getServiceById(@PathVariable int id) {
        return service.getById(id);
    }

    @PostMapping
    public Services createServices(@RequestBody Services serviceObj) {
        return service.saveServices(serviceObj);
    }

    @PutMapping("/{id}")
    public Services updateServices(@PathVariable int id, @RequestBody Services updatedService) {
        return service.updateServices(id, updatedService);
    }

    @DeleteMapping("/{id}")
    public void deleteServices(@PathVariable int id) {
        service.deleteServices(id); 
    }
}