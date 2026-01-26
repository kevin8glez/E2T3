package eus.fpsanturtzilh.pag.controller;

import eus.fpsanturtzilh.pag.model.Groups;
import eus.fpsanturtzilh.pag.service.GroupsService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/groups")
public class GroupsController {

    private final GroupsService service;

    public GroupsController(GroupsService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<Groups>> getAllGroups() {
        List<Groups> groups = service.getAllGroups();
        return ResponseEntity.ok(groups);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Groups> getGroupById(@PathVariable int id) {
        Groups group = service.getById(id);
        return group != null 
            ? ResponseEntity.ok(group) 
            : ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<Groups> createGroup(@RequestBody Groups group) {
        Groups saved = service.saveGroups(group);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Groups> updateGroup(@PathVariable int id, 
                                              @RequestBody Groups updatedGroup) {
        Groups updated = service.updateGroups(id, updatedGroup);
        return updated != null 
            ? ResponseEntity.ok(updated) 
            : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteGroup(@PathVariable int id) {
        service.deleteGroups(id);
        return ResponseEntity.noContent().build();
    }
}