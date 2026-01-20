package eus.fpsanturtzilh.pag.repository;

import eus.fpsanturtzilh.pag.model.Schedules;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


public interface SchedulesRepository extends JpaRepository<Schedules, Integer> {
    List<Schedules> findByGroupId(int groupId);

}
