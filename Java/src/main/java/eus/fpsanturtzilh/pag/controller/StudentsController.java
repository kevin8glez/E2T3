package eus.fpsanturtzilh.pag.controller;

import eus.fpsanturtzilh.pag.model.Students;
import eus.fpsanturtzilh.pag.service.StudentsService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<List<Students>> getAllStudents() {
        List<Students> students = service.getAllStudents();
        return ResponseEntity.ok(students);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Students> getStudentById(@PathVariable int id) {
        Students student = service.getById(id);
        return student != null 
            ? ResponseEntity.ok(student) 
            : ResponseEntity.notFound().build();
    }

    @GetMapping("/group/{groupId}")
    public ResponseEntity<List<Students>> getStudentsByGroupId(@PathVariable int groupId) {
        List<Students> students = service.getByGroupId(groupId);
        return ResponseEntity.ok(students);
    }

    @PostMapping
    public ResponseEntity<Students> createStudents(@RequestBody Students student) {
        Students saved = service.saveStudents(student);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Students> updateStudents(@PathVariable int id, 
                                                   @RequestBody Students updatedStudent) {
        Students updated = service.updateStudents(id, updatedStudent);
        return updated != null 
            ? ResponseEntity.ok(updated) 
            : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteStudents(@PathVariable int id) {
        service.deleteStudents(id);
        return ResponseEntity.noContent().build();
    }
}