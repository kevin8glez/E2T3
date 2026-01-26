package eus.fpsanturtzilh.pag.controller;

import eus.fpsanturtzilh.pag.model.Clients;
import eus.fpsanturtzilh.pag.service.ClientsService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/clients")
public class ClientsController {

    private final ClientsService service;

    public ClientsController(ClientsService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<Clients>> getAllClients() {
        List<Clients> clients = service.getAllClients();
        return ResponseEntity.ok(clients);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Clients> getClientById(@PathVariable int id) {
        Clients client = service.getById(id);
        return client != null 
            ? ResponseEntity.ok(client) 
            : ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<Clients> createClients(@RequestBody Clients client) {
        Clients saved = service.saveClients(client);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Clients> updateClients(@PathVariable int id, 
                                                 @RequestBody Clients updatedClient) {
        Clients updated = service.updateClients(id, updatedClient);
        return updated != null 
            ? ResponseEntity.ok(updated) 
            : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteClients(@PathVariable int id) {
        service.deleteClients(id);
        return ResponseEntity.noContent().build();
    }
}