package eus.fpsanturtzilh.pag.service;

import eus.fpsanturtzilh.pag.model.Students;
import eus.fpsanturtzilh.pag.repository.StudentsRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentsService {

    private final StudentsRepository repository;

    public StudentsService(StudentsRepository repository) {
        this.repository = repository;
    }

    public List<Students> getAllStudents() {
        return repository.findAll();
    }

    public Students saveStudents(Students student) {
        return repository.save(student);
    }
    
    public void deleteStudents(int id) {
        repository.deleteById(id);
    }
    
    public Students updateStudents(int id, Students updatedStudents) {
    	Students existingStudents = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found with id " + id));

    	existingStudents.setName(updatedStudents.getName());
    	existingStudents.setSurname(updatedStudents.getSurname());
    	existingStudents.setGroup(updatedStudents.getGroup());
    	
        return repository.save(existingStudents);
    }
    
    public Students getById(int id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found with id " + id));
    }
    
    public List<Students> getByGroupId(int groupId) {
        return repository.findByGroupId(groupId);
    }
    
}
