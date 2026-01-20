package eus.fpsanturtzilh.pag.service;

import eus.fpsanturtzilh.pag.model.Clients;
import eus.fpsanturtzilh.pag.repository.ClientsRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientsService {

    private final ClientsRepository repository;

    public ClientsService(ClientsRepository repository) {
        this.repository = repository;
    }

    public List<Clients> getAllClients() {
        return repository.findAll();
    }

    public Clients saveClients(Clients client) {
        return repository.save(client);
    }
    
    public void deleteClients(int id) {
        repository.deleteById(id);
    }
    
    public Clients updateClients(int id, Clients updatedClients) {
    	Clients existingclients = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Client not found with id " + id));

    	existingclients.setName(updatedClients.getName());
    	existingclients.setSurname(updatedClients.getSurname());
    	existingclients.setPhone(updatedClients.getPhone());
    	existingclients.setEmail(updatedClients.getEmail());
    	existingclients.setHomeClient(updatedClients.getHomeClient());

        return repository.save(existingclients);
    }
    
    public Clients getById(int id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Client not found with id " + id));
    }
    


}
