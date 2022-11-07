package service;

import javax.persistence.Column;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import exception.AdresseException;
import exception.IdException;
import model.Adresse;
import repository.AdresseRepository;

@Service
public class AdresseService {
	@Autowired
	private AdresseRepository adresseRepo;
	
	
	public Adresse create(Adresse adresse) {
		if (adresse.getId() != null) {
			throw new AdresseException("adresse deja dans la base");
		}
		return save(adresse);

	}

	public Adresse update(Adresse adresse) {
		if (adresse.getId() == null || !adresseRepo.existsById(adresse.getId())) {
			throw new IdException();
		}
		return save(adresse);
	}

	private Adresse save(Adresse adresse) {
		if (adresse.getNumero() == null || adresse.getNumero().isBlank() || adresse.getNumero().length() > 20) {
			throw new AdresseException("probleme numero");
		}
		if (adresse.getRue() == null || adresse.getRue().isBlank() || adresse.getRue().length() > 35) {
			throw new AdresseException("probleme rue");
		}
		if (adresse.getCp() == null || adresse.getCp().isBlank() || adresse.getCp().length() > 15) {
			throw new AdresseException("probleme code postal");
		}
		if (adresse.getVille() == null || adresse.getVille().isBlank() || adresse.getVille().length() > 35) {
			throw new AdresseException("probleme ville");
		}
		if (adresse.getPays() == null || adresse.getPays().isBlank() || adresse.getPays().length() > 20) {
			throw new AdresseException("probleme pays");
		}
		return adresseRepo.save(adresse);
	}

	public void delete(Adresse adresse) {
		adresseRepo.delete(adresse);
	}

	public void deleteById(Integer id) {
		adresseRepo.deleteById(id);
	}
}
