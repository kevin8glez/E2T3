package eus.fpsanturtzilh.pag.model;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

@Entity
@Getter 
@Setter
@NoArgsConstructor
public class Users {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    
    @Column(name = "username", length = 50)
    private String username;
    
    @Column(name = "email", length = 255)
    private String email;
    
    @Column(name = "rol", length = 50)
    private String rol;
    
    @Column(name = "created_at")
    private LocalDateTime createdAt;
    
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
    
    @Column(name = "deleted_at")
    private LocalDateTime deletedAt;
    
    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(
        name = "student_id",
        foreignKey = @jakarta.persistence.ForeignKey(name = "fk_users_students"),
        referencedColumnName = "id"
    )
    private Students student;
    
    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(
        name = "client_id",
        foreignKey = @jakarta.persistence.ForeignKey(name = "fk_users_clients"),
        referencedColumnName = "id"
    )
    private Clients client;
    
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
