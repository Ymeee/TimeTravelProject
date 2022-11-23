package ajc.sopra.TimeTravel.model;

import java.time.LocalDate;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonView;


@Entity //OBLIGATOIRE
@Table(name="reservation")
public class Reservation {
	@JsonView(JsonViews.Common.class)
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)//SEMI-OBLIGATOIRE pour de l'auto-increment
	private Integer id;
	
	@JsonView(JsonViews.Common.class)
	@Column(nullable = false)
	private double prixReel;
	
	@JsonView(JsonViews.Common.class)
	@ManyToOne
	private Client client; 
	
	@JsonView(JsonViews.Common.class)
	@Column(nullable = false)
	private LocalDate dateDepart;
	
	@JsonView(JsonViews.Common.class)
	@Column(nullable = false)
	private LocalTime heureDepart;
	
	@JsonView(JsonViews.Common.class)
	@ManyToMany
	@JoinTable(name="reservation_passager")
	private List<Passager> passager;
	
	@JsonView(JsonViews.Common.class)
	@ManyToOne
	private Voyage voyage;
	
	@Enumerated
	private Guide guide;
	@Column(nullable = false)
	@JsonView(JsonViews.Common.class)
	@Enumerated
	private EtatVoyage etatVoyage; 
	
	
	public Reservation() {
	}


	public Reservation(Integer id, Client client, List<Passager> passager, Voyage voyage, double prixReel, EtatVoyage etatVoyage, LocalDate dateDepart, LocalTime heureDepart) {
		this.id = id;
		this.client = client;
		this.passager = passager;
		this.voyage = voyage;
		this.prixReel = prixReel;
		this.etatVoyage = etatVoyage;
		this.dateDepart = dateDepart;
		this.heureDepart = heureDepart;
	}


	public Reservation(Client client, List<Passager> passager, Voyage voyage, double prixReel, EtatVoyage etatVoyage, LocalDate dateDepart,LocalTime heureDepart) {
		this.client = client;
		this.passager = passager;
		this.voyage = voyage;
		this.prixReel = prixReel;
		this.etatVoyage = etatVoyage;
		this.dateDepart = dateDepart;
		this.heureDepart = heureDepart;
	}


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public Client getClient() {
		return client;
	}


	public void setClient(Client client) {
		this.client = client;
	}


	public List<Passager> getPassager() {
		return passager;
	}


	public void setPassager(List<Passager> passager) {
		this.passager = passager;
	}


	public Voyage getVoyage() {
		return voyage;
	}


	public void setVoyage(Voyage voyage) {
		this.voyage = voyage;
	}


	public double getPrixReel() {
		return prixReel;
	}


	public void setPrixReel(double prixReel) {
		this.prixReel = prixReel;
	}
	
	public Guide getGuide() {
		return guide;
	}

	public void setGuide(Guide guide) {
		this.guide = guide;
	}

	public EtatVoyage getEtatVoyage() {
		return etatVoyage;
	}

	public void setEtatVoyage(EtatVoyage etatVoyage) {
		this.etatVoyage = etatVoyage;
	}


	public LocalDate getDateDepart() {
		return dateDepart;
	}


	public void setDateDepart(LocalDate dateDepart) {
		this.dateDepart = dateDepart;
	}


	public LocalTime getHeureDepart() {
		return heureDepart;
	}


	public void setHeureDepart(LocalTime heureDepart) {
		this.heureDepart = heureDepart;
	}
		
	
}
