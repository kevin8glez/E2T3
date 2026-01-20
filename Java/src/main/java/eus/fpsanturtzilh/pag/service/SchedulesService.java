package eus.fpsanturtzilh.pag.service;

import eus.fpsanturtzilh.pag.model.Schedules;
import eus.fpsanturtzilh.pag.repository.SchedulesRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SchedulesService {

    private final SchedulesRepository repository;

    public SchedulesService(SchedulesRepository repository) {
        this.repository = repository;
    }

    public List<Schedules> getAllSchedules() {
        return repository.findAll();
    }

    public Schedules saveSchedules(Schedules schedule) {
        return repository.save(schedule);
    }
    
    public void deleteSchedules(int id) {
        repository.deleteById(id);
    }
    
    public Schedules updateSchedules(int id, Schedules updatedSchedules) {
    	Schedules existingSchedule = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Schedule not found with id " + id));

    	existingSchedule.setGroup(updatedSchedules.getGroup());
    	existingSchedule.setDay(updatedSchedules.getDay());
    	existingSchedule.setStartDate(updatedSchedules.getStartDate());
    	existingSchedule.setEndDate(updatedSchedules.getEndDate());
    	existingSchedule.setStartTime(updatedSchedules.getStartTime());
        existingSchedule.setEndTime(updatedSchedules.getEndTime());

        return repository.save(existingSchedule);
    }
    
    public Schedules getById(int id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Schedule not found with id " + id));
    }
    
}
