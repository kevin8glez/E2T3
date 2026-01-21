package eus.fpsanturtzilh.pag.repository;

import eus.fpsanturtzilh.pag.model.Students;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;


public interface StudentsRepository extends JpaRepository<Students, Integer> {
	List<Students> findByGroupId(int groupId);
}
