package model;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

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
	
	
	@ManyToOne
	private Adresse adresse; 
	
	@ManyToOne
	private Machine machine; 
	@Column(nullable = false)
	@Enumerated
	private Epoque epoque;
	
	@JsonView(JsonViews.Common.class)
	@Column(nullable = false)
	private LocalDateTime dateDepart;
	
	@JsonView(JsonViews.Common.class)
	@Column(nullable = false)
	private LocalDateTime dateArrivee;
	
	@JsonView(JsonViews.Common.class)
	@Column(nullable = false)
	private LocalDateTime dateRetour;
	
	@JsonView(JsonViews.Common.class)
	@Column(nullable = false)
	private double prix; 
	
	public Voyage() {
	}

	public Voyage(Integer id, List<Reservation> reservation, Adresse adresse, Machine machine, Epoque epoque,
			LocalDateTime dateDepart, LocalDateTime dateArrivee, LocalDateTime dateRetour,
			double prix) {
		this.id = id;
		this.reservation = reservation;
		this.adresse = adresse;
		this.machine = machine;
		this.epoque = epoque;
		this.dateDepart = dateDepart;
		this.dateArrivee = dateArrivee;
		this.dateRetour = dateRetour;
		this.prix = prix;
	}

	public Voyage(List<Reservation> reservation, Adresse adresse, Machine machine, Epoque epoque,
			LocalDateTime dateDepart, LocalDateTime dateArrivee, LocalDateTime dateRetour,
			double prix) {
		this.reservation = reservation;
		this.adresse = adresse;
		this.machine = machine;
		this.epoque = epoque;
		this.dateDepart = dateDepart;
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


	public LocalDateTime getDateDepart() {
		return dateDepart;
	}

	public void setDateDepart(LocalDateTime dateDepart) {
		this.dateDepart = dateDepart;
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
	public String toString() {
		return "Voyage [id=" + id + ", reservation=" + reservation + ", adresse=" + adresse + ", machine=" + machine
				+ ", epoque=" + epoque + ", dateDepart="
				+ dateDepart + ", dateArrivee=" + dateArrivee + ", dateRetour=" + dateRetour + ", prix=" + prix + "]";
	}
	
	
	
	
	
	
}
