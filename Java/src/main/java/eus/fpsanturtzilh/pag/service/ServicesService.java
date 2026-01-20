package eus.fpsanturtzilh.pag.service;

import eus.fpsanturtzilh.pag.model.Services;
import eus.fpsanturtzilh.pag.repository.ServicesRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServicesService {

    private final ServicesRepository repository;

    public ServicesService(ServicesRepository repository) {
        this.repository = repository;
    }

    public List<Services> getAllServices() {
        return repository.findAll();
    }

    public Services saveServices(Services service) {
        return repository.save(service);
    }
    
    public void deleteServices(int id) {
        repository.deleteById(id);
    }
    
    public Services updateServices(int id, Services updatedServices) {
    	Services existingServices = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Service not found with id " + id));

    	existingServices.setName(updatedServices.getName());
        existingServices.setPrice(updatedServices.getPrice());
        existingServices.setHomePrice(updatedServices.getHomePrice());
        existingServices.setDuration(updatedServices.getDuration());

        return repository.save(existingServices);
    }
    
    public Services getById(int id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Service not found with id " + id));
    }
    
}
