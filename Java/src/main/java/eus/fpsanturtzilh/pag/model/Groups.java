package eus.fpsanturtzilh.pag.model;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

@Entity
@Getter 
@Setter
@NoArgsConstructor
public class Groups {
	@Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY) 
	private Long id;
    
    @Column(name = "name")
    private String name;
    
    @Column(name = "created_at")
    private Date createdAt;
    
    @Column(name = "updated_at")
    private Date updatedAt;
    
    @Column(name = "deleted_at")
    private Date deletedAt;

}
