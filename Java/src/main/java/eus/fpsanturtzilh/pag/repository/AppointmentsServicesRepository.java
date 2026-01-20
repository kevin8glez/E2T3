package eus.fpsanturtzilh.pag.repository;

import eus.fpsanturtzilh.pag.model.AppointmentsServices;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface AppointmentsServicesRepository extends JpaRepository<AppointmentsServices, Integer> {
    
    List<AppointmentsServices> findByAppointmentId(int appointmentId);
    
    List<AppointmentsServices> findByServiceId(int serviceId);
    
    Optional<AppointmentsServices> findByAppointmentIdAndServiceId(int appointmentId, Long serviceId);
}