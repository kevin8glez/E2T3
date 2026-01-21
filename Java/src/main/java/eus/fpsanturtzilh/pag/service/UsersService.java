package eus.fpsanturtzilh.pag.service;

import eus.fpsanturtzilh.pag.model.Users;
import eus.fpsanturtzilh.pag.model.Students;
import eus.fpsanturtzilh.pag.model.Clients;
import eus.fpsanturtzilh.pag.repository.UsersRepository;
import eus.fpsanturtzilh.pag.repository.StudentsRepository; 
import eus.fpsanturtzilh.pag.repository.ClientsRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsersService {

    private final UsersRepository repository;
    private final StudentsRepository studentsRepository; 
    private final ClientsRepository clientsRepository;   

    public UsersService(UsersRepository repository, 
                       StudentsRepository studentsRepository,
                       ClientsRepository clientsRepository) {
        this.repository = repository;
        this.studentsRepository = studentsRepository; 
        this.clientsRepository = clientsRepository;   
    }

    public List<Users> getAllUsers() {
        return repository.findAll();
    }

    public Users saveUsers(Users user) {
        if (user.getStudent() != null && user.getStudent().getId() != 0) {
            Integer studentId = user.getStudent().getId();
            Students fullStudent = studentsRepository.findById(studentId)
                .orElseThrow(() -> new RuntimeException("Student not found with id " + studentId));
            user.setStudent(fullStudent);
        }
        
        if (user.getClient() != null && user.getClient().getId() != 0) {
            Integer clientId = user.getClient().getId();
            Clients fullClient = clientsRepository.findById(clientId)
                .orElseThrow(() -> new RuntimeException("Client not found with id " + clientId));
            user.setClient(fullClient);
        }
        
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
        
        if (updatedUsers.getStudent() != null && updatedUsers.getStudent().getId() != 0) {
            Integer studentId = updatedUsers.getStudent().getId();
            Students fullStudent = studentsRepository.findById(studentId)
                .orElseThrow(() -> new RuntimeException("Student not found with id " + studentId));
            existingUsers.setStudent(fullStudent);
        } else {
            existingUsers.setStudent(updatedUsers.getStudent());
        }
        
        if (updatedUsers.getClient() != null && updatedUsers.getClient().getId() != 0) {
            Integer clientId = updatedUsers.getClient().getId();
            Clients fullClient = clientsRepository.findById(clientId)
                .orElseThrow(() -> new RuntimeException("Client not found with id " + clientId));
            existingUsers.setClient(fullClient);
        } else {
            existingUsers.setClient(updatedUsers.getClient());
        }

        return repository.save(existingUsers);
    }
    
    public Users getById(int id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found with id " + id));
    }
}