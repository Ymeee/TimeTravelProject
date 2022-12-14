package model;

import java.util.List;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Embeddable
public class Adresse {
	

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

	public Adresse() {
	}
	
	public Adresse(String numero, String rue, String cp, String ville, String pays) {
		this.numero = numero;
		this.rue = rue;
		this.cp = cp;
		this.ville = ville;
		this.pays = pays;
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

	@Override
	public int hashCode() {
		return Objects.hash(cp, numero, pays, rue, ville);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Adresse other = (Adresse) obj;
		return Objects.equals(cp, other.cp) && Objects.equals(numero, other.numero) && Objects.equals(pays, other.pays)
				&& Objects.equals(rue, other.rue) && Objects.equals(ville, other.ville);
	}


	
	

}
