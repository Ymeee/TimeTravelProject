package model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
@DiscriminatorValue("adresse")

@Embeddable
public class Adresse {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column(length = 20,nullable = false)
	private String numero;
	@Column(length = 35,nullable = false)
	private String rue;
	@Column(length = 15,nullable = false)
	private String cp;
	@Column(length = 35,nullable = false)
	private String ville;
	@Column(length = 20,nullable = false)
	private String pays;
	
	@OneToMany(mappedBy = "adresse")
	private List<Client> client;
	
	@OneToMany(mappedBy="adresse")
	private List<Voyage> voyages;

	public Adresse() {
	}
	
	public Adresse(Integer id, String numero, String rue, String cp, String ville, String pays) {
		this.id = id;
		this.numero = numero;
		this.rue = rue;
		this.cp = cp;
		this.ville = ville;
		this.pays = pays;
	}

	@Override
	public String toString() {
		return "Adresse [id=" + id + ", numero=" + numero + ", rue=" + rue + ", cp=" + cp + ", ville=" + ville
				+ ", pays=" + pays + ", client=" + client + "]";
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNumero() {
		return numero;
	}

	public void setNumero(String numero) {
		this.numero = numero;
	}

	public String getRue() {
		return rue;
	}

	public void setRue(String rue) {
		this.rue = rue;
	}

	public String getCp() {
		return cp;
	}

	public void setCp(String cp) {
		this.cp = cp;
	}

	public String getVille() {
		return ville;
	}

	public void setVille(String ville) {
		this.ville = ville;
	}

	public String getPays() {
		return pays;
	}

	public void setPays(String pays) {
		this.pays = pays;
	}

	public List<Client> getClient() {
		return client;
	}

	public void setClient(List<Client> client) {
		this.client = client;
	}
	
	

}
