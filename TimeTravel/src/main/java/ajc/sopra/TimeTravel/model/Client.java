package ajc.sopra.TimeTravel.model;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.validation.constraints.Email;

import com.fasterxml.jackson.annotation.JsonView;

@Entity
@DiscriminatorValue("Client")
public class Client extends Compte {
	
	@JsonView(JsonViews.Common.class)
	private String tel;
	@Email
	@JsonView(JsonViews.Common.class)
	@Column(unique=true)
	private String mail;
	@JsonView(JsonViews.Common.class)
	//@Column(nullable = false)
	private LocalDate anniversaire;
	
	@OneToMany(mappedBy="client")
	private List<Reservation> reservation;
	
	@JsonView(JsonViews.Common.class)
	@Embedded
	private Adresse adresse;
	
	public Client() {
	}

	public Client(Integer id, String login, String password, String nom, String prenom, String tel, String mail,
			LocalDate anniversaire) {
		super(id, login, password, nom, prenom);
		this.tel = tel;
		this.mail = mail;
		this.anniversaire = anniversaire;
	}
	

	public String getTel() {
		return tel;
	}

	public void setTel(String tel) {
		this.tel = tel;
	}

	public String getMail() {
		return mail;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}

	public LocalDate getAnniversaire() {
		return anniversaire;
	}

	public void setAnniversaire(LocalDate anniversaire) {
		this.anniversaire = anniversaire;
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
	
	
	
	

}
