package eus.fpsanturtzilh.pag.service;

import eus.fpsanturtzilh.pag.model.Students;
import eus.fpsanturtzilh.pag.model.Groups;
import eus.fpsanturtzilh.pag.repository.StudentsRepository;
import eus.fpsanturtzilh.pag.repository.GroupsRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentsService {

    private final StudentsRepository repository;
    private final GroupsRepository groupsRepository; 

    public StudentsService(StudentsRepository repository, GroupsRepository groupsRepository) {
        this.repository = repository;
        this.groupsRepository = groupsRepository; 
    }

    public List<Students> getAllStudents() {
        return repository.findAll();
    }

    public Students saveStudents(Students student) {
        if (student.getGroup() != null && student.getGroup().getId() != 0) {
            Integer groupId = student.getGroup().getId();
            Groups fullGroup = groupsRepository.findById(groupId)
                .orElseThrow(() -> new RuntimeException("Group not found with id " + groupId));
            student.setGroup(fullGroup); 
        }
        
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
        
        if (updatedStudents.getGroup() != null && updatedStudents.getGroup().getId() != 0) {
            Integer groupId = updatedStudents.getGroup().getId();
            Groups fullGroup = groupsRepository.findById(groupId)
                .orElseThrow(() -> new RuntimeException("Group not found with id " + groupId));
            existingStudents.setGroup(fullGroup);
        }
        
        return repository.save(existingStudents);
    }
    
    public Students getStudentWithGroup(int id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found with id " + id));
    }
    
    public Students getById(int id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found with id " + id));
    }
    
    public List<Students> getByGroupId(int groupId) {
        return repository.findByGroupId(groupId);
    }
    
    
}