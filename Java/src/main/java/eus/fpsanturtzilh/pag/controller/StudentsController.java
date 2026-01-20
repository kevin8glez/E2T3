package eus.fpsanturtzilh.pag.controller;

import eus.fpsanturtzilh.pag.model.Students;
import eus.fpsanturtzilh.pag.service.StudentsService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/students")
public class StudentsController {

    private final StudentsService service;

    public StudentsController(StudentsService service) {
        this.service = service;
    }

    @GetMapping
    public List<Students> getAllStudents() {
        return service.getAllStudents();
    }

    @GetMapping("/{id}")
    public Students getStudentById(@PathVariable int id) {
        return service.getById(id);
    }

    @GetMapping("/group/{groupId}")
    public List<Students> getStudentsByGroupId(@PathVariable int groupId) {
        return service.getByGroupId(groupId);
    }

    @PostMapping
    public Students createStudents(@RequestBody Students student) {
        return service.saveStudents(student);
    }

    @PutMapping("/{id}")
    public Students updateStudents(@PathVariable int id, @RequestBody Students updatedStudent) {
        return service.updateStudents(id, updatedStudent); 
    }

    @DeleteMapping("/{id}")
    public void deleteStudents(@PathVariable int id) {
        service.deleteStudents(id);
    }
}