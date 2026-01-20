package eus.fpsanturtzilh.pag.repository;

import eus.fpsanturtzilh.pag.model.Students;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


public interface StudentsRepository extends JpaRepository<Students, Integer> {
	List<Students> findByGroupId(int groupId);
}
