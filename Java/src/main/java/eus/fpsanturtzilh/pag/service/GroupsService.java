package eus.fpsanturtzilh.pag.service;

import eus.fpsanturtzilh.pag.model.Groups;
import eus.fpsanturtzilh.pag.repository.GroupsRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GroupsService {

    private final GroupsRepository repository;

    public GroupsService(GroupsRepository repository) {
        this.repository = repository;
    }

    public List<Groups> getAllGroups() {
        return repository.findAll();
    }

    public Groups saveGroups(Groups group) {
        return repository.save(group);
    }
    
    public void deleteGroups(int id) {
        repository.deleteById(id);
    }
    
    public Groups updateGroups(int id, Groups updatedGroups) {
    	Groups existingGroup = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Group not found with id " + id));

    	existingGroup.setName(updatedGroups.getName());


        return repository.save(existingGroup);
    }
    
    public Groups getById(int id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Group not found with id " + id));
    }
    
}
