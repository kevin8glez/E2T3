package eus.fpsanturtzilh.pag.model;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

@Entity
@Getter 
@Setter
@NoArgsConstructor
public class Schedules {
	@Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY) 
    private int id;
	@ManyToOne
    @JoinColumn(
    		name = "group_id",
			foreignKey = @jakarta.persistence.ForeignKey(name = "fk_students_groups"),
			referencedColumnName = "id") 
	private int group_id;
	private int day;
	private String surname;
	
	private Date created_at;
	private Date update_at;
	private Date deleted_at;

}
