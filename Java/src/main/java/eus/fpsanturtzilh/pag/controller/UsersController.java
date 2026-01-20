package eus.fpsanturtzilh.pag.controller;

import eus.fpsanturtzilh.pag.model.Users;
import eus.fpsanturtzilh.pag.service.UsersService;
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
    public List<Users> getAllUsers() {
        return service.getAllUsers();
    }

    @GetMapping("/{id}")
    public Users getUserById(@PathVariable int id) {
        return service.getById(id);
    }

    @PostMapping
    public Users createUsers(@RequestBody Users user) {
        return service.saveUsers(user);
    }

    @PutMapping("/{id}")
    public Users updateUsers(@PathVariable int id, @RequestBody Users updatedUser) {
        return service.updateUsers(id, updatedUser);
    }

    @DeleteMapping("/{id}")
    public void deleteUsers(@PathVariable int id) {
        service.deleteUsers(id);
    }
}