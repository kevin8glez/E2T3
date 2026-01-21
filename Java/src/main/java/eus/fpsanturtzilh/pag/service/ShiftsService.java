package eus.fpsanturtzilh.pag.service;

import eus.fpsanturtzilh.pag.model.Shifts;
import eus.fpsanturtzilh.pag.model.Students;
import eus.fpsanturtzilh.pag.repository.ShiftsRepository;
import eus.fpsanturtzilh.pag.repository.StudentsRepository; 
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShiftsService {

    private final ShiftsRepository repository;
    private final StudentsRepository studentsRepository; 

    public ShiftsService(ShiftsRepository repository, StudentsRepository studentsRepository) {
        this.repository = repository;
        this.studentsRepository = studentsRepository;
    }
    
    public List<Shifts> getAllShifts() {
        return repository.findAll();
    }

    public Shifts saveShifts(Shifts shift) {
        if (shift.getStudent() != null && shift.getStudent().getId() != 0) {
            Integer studentId = shift.getStudent().getId();
            Students fullStudent = studentsRepository.findById(studentId)
                .orElseThrow(() -> new RuntimeException("Student not found with id " + studentId));
            shift.setStudent(fullStudent);
        }
        
        return repository.save(shift);
    }
    
    public void deleteShifts(int id) {
        repository.deleteById(id);
    }
    
    public Shifts updateShifts(int id, Shifts updatedShifts) {
    	Shifts existingShifts = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Shift not found with id " + id));

    	existingShifts.setType(updatedShifts.getType());
    	
    	if (updatedShifts.getStudent() != null && updatedShifts.getStudent().getId() != 0) {
            Integer studentId = updatedShifts.getStudent().getId();
            Students fullStudent = studentsRepository.findById(studentId)
                .orElseThrow(() -> new RuntimeException("Student not found with id " + studentId));
            existingShifts.setStudent(fullStudent);
        }
    	
        return repository.save(existingShifts);
    }
    
    public Shifts getById(int id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Shift not found with id " + id));
    }
    
}