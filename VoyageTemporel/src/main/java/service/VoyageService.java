package service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import exception.VoyageException;
import exception.IdException;
import model.Voyage;
import repository.VoyageRepository;

@Service
public class VoyageService {

	@Autowired
	private VoyageRepository voyageRepo;
	
	public List<Voyage> findAll() {
		return voyageRepo.findAll();
	}

	public Voyage findById(Integer id) {
		return voyageRepo.findById(id).orElseThrow(IdException::new);
	}
	
	public Voyage create(Voyage voyage) {
		if (voyage.getId() != null) {
			throw new VoyageException("voyage deja dans la base");
		}
		return save(voyage);

	}

	public Voyage update(Voyage voyage) {
		if (voyage.getId() == null || !voyageRepo.existsById(voyage.getId())) {
			throw new IdException();
		}
		return save(voyage);
	}

	private Voyage save(Voyage voyage) {
		/*if (voyage.getReservation() == null) {
			throw new VoyageException("probleme reservation");
		}
		if (voyage.getAdresse() == null) {
			throw new VoyageException("probleme adresse");
		}
		if (voyage.getMachine() == null) {
			throw new VoyageException("probleme machine");
		}
		if (voyage.getEpoque() == null) {
			throw new VoyageException("probleme epoque");
		}*/
		if (voyage.getDateDepart() == null || voyage.getDateDepart().isBefore(LocalDateTime.now())) {
			throw new VoyageException("probleme date depart (present)");
		}
		if (voyage.getDateArrivee() == null || voyage.getDateArrivee().isAfter(voyage.getDateRetour())) {
			throw new VoyageException("probleme date arrivee (passe)");
		}
		if (voyage.getDateRetour() == null || voyage.getDateRetour().isBefore(voyage.getDateArrivee())) {
			throw new VoyageException("probleme date retour (passe)");
		}
		return voyageRepo.save(voyage);
	}

	public void delete(Voyage voyage) {
		voyageRepo.delete(voyage);
	}

	public void deleteById(Integer id) {
		voyageRepo.deleteById(id);
	}
}
