package service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import exception.PassagerException;
import exception.IdException;
import model.Passager;
import repository.PassagerRepository;

@Service
public class PassagerService {

	@Autowired
	private PassagerRepository passagerRepo;
	
	public List<Passager> findAll() {
		return passagerRepo.findAll();
	}

	public Passager findById(Integer id) {
		return passagerRepo.findById(id).orElseThrow(IdException::new);
	}
	
	public Passager create(Passager passager) {
		if (passager.getId() != null) {
			throw new PassagerException("passager deja dans la base");
		}
		return save(passager);

	}

	public Passager update(Passager passager) {
		if (passager.getId() == null || !passagerRepo.existsById(passager.getId())) {
			throw new IdException();
		}
		return save(passager);
	}

	private Passager save(Passager passager) {
		if (passager.getNom() == null || passager.getNom().isBlank() || passager.getNom().length() > 35) {
			throw new PassagerException("probleme nom");
		}
		if (passager.getPrenom() == null || passager.getPrenom().isBlank() || passager.getPrenom().length() > 30) {
			throw new PassagerException("probleme prenom");
		}

		return passagerRepo.save(passager);
	}

	public void delete(Passager passager) {
		passagerRepo.delete(passager);
	}

	public void deleteById(Integer id) {
		passagerRepo.deleteById(id);
	}
}
