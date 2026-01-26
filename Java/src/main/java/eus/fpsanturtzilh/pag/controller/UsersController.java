package eus.fpsanturtzilh.pag.controller;

import eus.fpsanturtzilh.pag.model.Users;
import eus.fpsanturtzilh.pag.service.UsersService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UsersController {

    private final UsersService service;

    public UsersController(UsersService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<Users>> getAllUsers() {
        List<Users> users = service.getAllUsers();
        return ResponseEntity.ok(users);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Users> getUserById(@PathVariable int id) {
        Users user = service.getById(id);
        return user != null 
            ? ResponseEntity.ok(user) 
            : ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<Users> createUsers(@RequestBody Users user) {
        Users saved = service.saveUsers(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Users> updateUsers(@PathVariable int id, 
                                             @RequestBody Users updatedUser) {
        Users updated = service.updateUsers(id, updatedUser);
        return updated != null 
            ? ResponseEntity.ok(updated) 
            : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUsers(@PathVariable int id) {
        service.deleteUsers(id);
        return ResponseEntity.noContent().build();
    }
}