package eus.fpsanturtzilh.pag.repository;

import eus.fpsanturtzilh.pag.model.Appointments;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;


public interface AppointmentsRepository extends JpaRepository<Appointments, Integer> {
	List<Appointments> findByStudentId(int studentId);
    List<Appointments> findByClientId(int clientId);
}
