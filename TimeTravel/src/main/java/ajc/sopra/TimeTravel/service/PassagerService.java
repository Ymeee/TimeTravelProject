package ajc.sopra.TimeTravel.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import ajc.sopra.TimeTravel.exception.PassagerException;
import ajc.sopra.TimeTravel.exception.IdException;
import ajc.sopra.TimeTravel.model.Passager;
import ajc.sopra.TimeTravel.repository.PassagerRepository;

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
		if (passager.getAge() > 150 || passager.getAge() < 0) {
			throw new PassagerException("probleme age");
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