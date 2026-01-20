package eus.fpsanturtzilh.pag.service;

import eus.fpsanturtzilh.pag.model.Shifts;
import eus.fpsanturtzilh.pag.repository.ShiftsRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShiftsService {

    private final ShiftsRepository repository;

    public ShiftsService(ShiftsRepository repository) {
        this.repository = repository;
    }

    public List<Shifts> getAllShifts() {
        return repository.findAll();
    }

    public Shifts saveShifts(Shifts shift) {
        return repository.save(shift);
    }
    
    public void deleteShifts(int id) {
        repository.deleteById(id);
    }
    
    public Shifts updateShifts(int id, Shifts updatedShifts) {
    	Shifts existingShifts = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Shift not found with id " + id));

    	existingShifts.setType(updatedShifts.getType());
    	existingShifts.setStudent(updatedShifts.getStudent());

        return repository.save(existingShifts);
    }
    
    public Shifts getById(int id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Shift not found with id " + id));
    }
    
}
