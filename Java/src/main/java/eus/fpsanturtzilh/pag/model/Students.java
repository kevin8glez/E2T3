package eus.fpsanturtzilh.pag.model;

import java.sql.Date;

import jakarta.persistence.Column;
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
public class Students {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "name", length = 100)
    private String name;
    
    @Column(name = "surname", length = 100)
    private String surname;
    
    @ManyToOne
    @JoinColumn(
        name = "group_id",
        foreignKey = @jakarta.persistence.ForeignKey(name = "fk_students_groups"),
        referencedColumnName = "id"
    )
    private Groups group;
    
    @Column(name = "created_at")
    private Date createdAt;
    
    @Column(name = "updated_at")
    private Date updatedAt;
    
    @Column(name = "deleted_at")
    private Date deletedAt;

}
