package ajc.sopra.TimeTravel.model;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Embeddable;
import javax.persistence.Embedded;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.annotation.JsonView;


@Entity //OBLIGATOIRE
@Table(name="voyage")
public class Voyage {
	@JsonView(JsonViews.Common.class)
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)//SEMI-OBLIGATOIRE pour de l'auto-increment
	private Integer id;

	@JsonView(JsonViews.VoyageWithReservation.class)
	@OneToMany(mappedBy = "voyage")
	private List<Reservation> reservation;
	
	@JsonView(JsonViews.Common.class)
	@Embedded
	private Adresse adresse; 
	
	@JsonView(JsonViews.Common.class)
	@ManyToOne
	private Machine machine; 
	
	@JsonView(JsonViews.Common.class)
	@Column(nullable = false)
	@Enumerated
	private Epoque epoque;
	
	
	@JsonView(JsonViews.Common.class)
	@Column(nullable = false)
	private LocalDateTime dateArrivee;
	
	@JsonView(JsonViews.Common.class)
	@Column(nullable = false)
	private LocalDateTime dateRetour;
	
	@JsonView(JsonViews.Common.class)
	@Column(nullable = false)
	private double prix; 
	
	private static final Logger LOGGER = LoggerFactory.getLogger(Voyage.class);

	
	public Voyage() {
	}

	public Voyage(Integer id, List<Reservation> reservation, Adresse adresse, Machine machine, Epoque epoque,
			LocalDateTime dateArrivee, LocalDateTime dateRetour,
			double prix) {
		this.id = id;
		this.reservation = reservation;
		this.adresse = adresse;
		this.machine = machine;
		this.epoque = epoque;
		this.dateArrivee = dateArrivee;
		this.dateRetour = dateRetour;
		this.prix = prix;
	}

	public Voyage(List<Reservation> reservation, Adresse adresse, Machine machine, Epoque epoque,
			LocalDateTime dateArrivee, LocalDateTime dateRetour,
			double prix) {
		this.reservation = reservation;
		this.adresse = adresse;
		this.machine = machine;
		this.epoque = epoque;
		this.dateArrivee = dateArrivee;
		this.dateRetour = dateRetour;
		this.prix = prix;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public List<Reservation> getReservation() {
		return reservation;
	}

	public void setReservation(List<Reservation> reservation) {
		this.reservation = reservation;
	}

	public Adresse getAdresse() {
		return adresse;
	}

	public void setAdresse(Adresse adresse) {
		this.adresse = adresse;
	}

	public Machine getMachine() {
		return machine;
	}

	public void setMachine(Machine machine) {
		this.machine = machine;
	}

	public Epoque getEpoque() {
		return epoque;
	}

	public void setEpoque(Epoque epoque) {
		this.epoque = epoque;
	}

	public LocalDateTime getDateArrivee() {
		return dateArrivee;
	}

	public void setDateArrivee(LocalDateTime dateArrivee) {
		this.dateArrivee = dateArrivee;
	}

	public LocalDateTime getDateRetour() {
		return dateRetour;
	}

	public void setDateRetour(LocalDateTime dateRetour) {
		this.dateRetour = dateRetour;
	}

	public double getPrix() {
		return prix;
	}

	public void setPrix(double prix) {
		this.prix = prix;
	}

	@Override
	public int hashCode() {
		return Objects.hash(adresse);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Voyage other = (Voyage) obj;
		return Objects.equals(adresse, other.adresse);
	}

	
	
	
	
	
	
}
