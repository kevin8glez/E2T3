package eus.fpsanturtzilh.pag.controller;

import eus.fpsanturtzilh.pag.model.Groups;
import eus.fpsanturtzilh.pag.service.GroupsService;
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
    public List<Groups> getAllGroups() {
        return service.getAllGroups();
    }

    @GetMapping("/{id}")
    public Groups getGroupById(@PathVariable int id) {
        return service.getById(id);
    }

    @PostMapping
    public Groups createGroup(@RequestBody Groups group) {
        return service.saveGroups(group);
    }

    @PutMapping("/{id}")
    public Groups updateGroup(@PathVariable int id, @RequestBody Groups updatedGroup) {
        return service.updateGroups(id, updatedGroup);
    }

    @DeleteMapping("/{id}")
    public void deleteGroup(@PathVariable int id) {
        service.deleteGroups(id);
    }
}