package eus.fpsanturtzilh.pag.controller;

import eus.fpsanturtzilh.pag.model.Clients;
import eus.fpsanturtzilh.pag.service.ClientsService;
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
    public List<Clients> getAllClients() {
        return service.getAllClients();
    }

    @GetMapping("/{id}")
    public Clients getClientById(@PathVariable int id) {
        return service.getById(id);
    }

    @PostMapping
    public Clients createClients(@RequestBody Clients client) {
        return service.saveClients(client);
    }

    @PutMapping("/{id}")
    public Clients updateClients(@PathVariable int id, @RequestBody Clients updatedClient) {
        return service.updateClients(id, updatedClient);
    }

    @DeleteMapping("/{id}")
    public void deleteClients(@PathVariable int id) {
        service.deleteClients(id);
    }
}