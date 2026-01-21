package eus.fpsanturtzilh.pag.model;

import java.sql.Date;
import java.sql.Time;
import java.time.LocalDateTime;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

@Entity
@Getter 
@Setter
@NoArgsConstructor
public class Appointments {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private int id;
	    
	    @Column(name = "seat")
	    private int seat;
	    
	    @Column(name = "date")
	    private Date date;
	    
	    @Column(name = "start_time")
	    private Time startTime;
	    
	    @Column(name = "end_time")
	    private Time endTime;
	    
	    @Column(name = "comment")
	    private String comment;
	    
	    @ManyToOne(fetch = FetchType.EAGER)
	    @JoinColumn(
	        name = "student_id",
	        foreignKey = @jakarta.persistence.ForeignKey(name = "fk_appointments_students"),
	        referencedColumnName = "id"
	    )
	    private Students student;
	    
	    @ManyToOne(fetch = FetchType.EAGER)
	    @JoinColumn(
	        name = "client_id",
	        foreignKey = @jakarta.persistence.ForeignKey(name = "fk_appointments_clients"),
	        referencedColumnName = "id"
	    )
	    private Clients client;
	    
	    @OneToMany(mappedBy = "appointment")
	    @JsonIgnore
	    private List<AppointmentsServices> appointmentServices;
	    
	    @Column(name = "name")
	    private String name;
	    
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
