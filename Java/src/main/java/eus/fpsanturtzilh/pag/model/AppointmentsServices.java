package eus.fpsanturtzilh.pag.model;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

@Entity
@Getter 
@Setter
@NoArgsConstructor
public class AppointmentsServices {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(
	    name = "appointment_id",
	    foreignKey = @jakarta.persistence.ForeignKey(name = "fk_appointmentsservices_appointments"),
	    referencedColumnName = "id"
	)
	private Appointments appointment;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(
	    name = "service_id",
	    foreignKey = @jakarta.persistence.ForeignKey(name = "fk_appointmentsservices_services"),
	    referencedColumnName = "id"
	)
	private Services service;
	
	@Column(name = "comment")
	private String comment;
	
	@Column(name = "created_at")
	private LocalDateTime createdAt;
	
	@Column(name = "updated_at")
	private LocalDateTime updatedAt;
	
	@Column(name = "deleted_at")
	private LocalDateTime deletedAt;
	
	@PrePersist
	protected void onCreate() {
	    createdAt = LocalDateTime.now();
	    updatedAt = LocalDateTime.now();
	}

	@PreUpdate
	protected void onUpdate() {
	    updatedAt = LocalDateTime.now();
	}

}
