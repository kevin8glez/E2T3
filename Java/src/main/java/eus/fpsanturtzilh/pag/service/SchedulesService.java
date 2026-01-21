package eus.fpsanturtzilh.pag.service;

import eus.fpsanturtzilh.pag.model.Schedules;
import eus.fpsanturtzilh.pag.model.Groups; 
import eus.fpsanturtzilh.pag.repository.SchedulesRepository;
import eus.fpsanturtzilh.pag.repository.GroupsRepository; 
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SchedulesService {

    private final SchedulesRepository repository;
    private final GroupsRepository groupsRepository; 

    public SchedulesService(SchedulesRepository repository, GroupsRepository groupsRepository) {
        this.repository = repository;
        this.groupsRepository = groupsRepository; 
    }

    public List<Schedules> getAllSchedules() {
        return repository.findAll();
    }

    public Schedules saveSchedules(Schedules schedule) {
        if (schedule.getGroup() != null && schedule.getGroup().getId() != null) {
            Integer groupId = schedule.getGroup().getId();
            Groups fullGroup = groupsRepository.findById(groupId)
                .orElseThrow(() -> new RuntimeException("Group not found with id " + groupId));
            schedule.setGroup(fullGroup);
        }
        
        return repository.save(schedule);
    }
    
    public void deleteSchedules(int id) {
        repository.deleteById(id);
    }
    
    public Schedules updateSchedules(int id, Schedules updatedSchedules) {
        Schedules existingSchedule = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Schedule not found with id " + id));

        existingSchedule.setDay(updatedSchedules.getDay());
        existingSchedule.setStartDate(updatedSchedules.getStartDate());
        existingSchedule.setEndDate(updatedSchedules.getEndDate());
        existingSchedule.setStartTime(updatedSchedules.getStartTime());
        existingSchedule.setEndTime(updatedSchedules.getEndTime());
    	
        if (updatedSchedules.getGroup() != null && updatedSchedules.getGroup().getId() != null) {
            Integer groupId = updatedSchedules.getGroup().getId();
            Groups fullGroup = groupsRepository.findById(groupId)
                .orElseThrow(() -> new RuntimeException("Group not found with id " + groupId));
            existingSchedule.setGroup(fullGroup);
        } else {
            existingSchedule.setGroup(updatedSchedules.getGroup());
        }

        return repository.save(existingSchedule);
    }
    
    public Schedules getById(int id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Schedule not found with id " + id));
    }
}