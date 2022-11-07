package model;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;


@Entity
@DiscriminatorValue("admin")
public class Admin extends Compte {
	
	
	
	public Admin() {
	}
	
	public Admin(Integer id, String login, String password, String nom, String prenom) {
		super(id, login, password, nom, prenom);
	}
	
	
}
