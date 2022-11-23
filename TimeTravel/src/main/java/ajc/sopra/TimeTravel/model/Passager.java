package ajc.sopra.TimeTravel.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonView;


@Entity
@Table(name="passager")
public class Passager {
		@JsonView(JsonViews.Common.class)
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		protected Integer id;
		
		@JsonView(JsonViews.Common.class)
		@Column(columnDefinition = "VARCHAR(35)", nullable = false)
		private String nom;
		
		@JsonView(JsonViews.Common.class)
		@Column(length = 30, nullable = false)
		private String prenom;
		
		@JsonView(JsonViews.Common.class)
		private int age;
		
		
		@ManyToMany(mappedBy="passager")
		private List<Reservation> reservation;
		
		public Passager() {
		
		}
		public Passager(Integer id, String nom, String prenom, int age, List<Reservation> reservation) {
		
			this.id = id;
			this.nom = nom;
			this.prenom = prenom;
			this.age = age;
			this.reservation = reservation;
		}
		public Passager( String nom, String prenom, int age, List<Reservation> reservation) {
			
			this.nom = nom;
			this.prenom = prenom;
			this.age = age;
			this.reservation = reservation;

		}
		public Integer getId() {
			return id;
		}
		public void setId(Integer id) {
			this.id = id;
		}
		public String getNom() {
			return nom;
		}
		public void setNom(String nom) {
			this.nom = nom;
		}
		public String getPrenom() {
			return prenom;
		}
		public void setPrenom(String prenom) {
			this.prenom = prenom;
		}
		public int getAge() {
			return age;
		}
		public void setAge(int age) {
			this.age = age;
		}
		@Override
		public String toString() {
			return "Passager [nom=" + nom + ", prenom=" + prenom + ", age=" + age + "]";
		}
		
		
		
		
		

}
