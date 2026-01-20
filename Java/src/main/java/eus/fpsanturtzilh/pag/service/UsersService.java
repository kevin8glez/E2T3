package eus.fpsanturtzilh.pag.service;

import eus.fpsanturtzilh.pag.model.Users;
import eus.fpsanturtzilh.pag.repository.UsersRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsersService {

    private final UsersRepository repository;

    public UsersService(UsersRepository repository) {
        this.repository = repository;
    }

    public List<Users> getAllUsers() {
        return repository.findAll();
    }

    public Users saveUsers(Users user) {
        return repository.save(user);
    }
    
    public void deleteUsers(int id) {
        repository.deleteById(id);
    }
    
    public Users updateUsers(int id, Users updatedUsers) {
    	Users existingUsers = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found with id " + id));

    	existingUsers.setUsername(updatedUsers.getUsername());
    	existingUsers.setEmail(updatedUsers.getEmail());
        existingUsers.setRol(updatedUsers.getRol());

        return repository.save(existingUsers);
    }
    
    public Users getById(int id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found with id " + id));
    }
    
}
