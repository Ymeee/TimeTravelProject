package ajc.sopra.TimeTravel.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import ajc.sopra.TimeTravel.exception.VoyageException;
import ajc.sopra.TimeTravel.exception.IdException;
import ajc.sopra.TimeTravel.model.Adresse;
import ajc.sopra.TimeTravel.model.EtatMachine;
import ajc.sopra.TimeTravel.model.Voyage;
import ajc.sopra.TimeTravel.repository.VoyageRepository;

@Service
public class VoyageService {

	@Autowired
	private VoyageRepository voyageRepo;
	
	public List<Voyage> findAll() {
		return voyageRepo.findAll();
	}
	
	public List<Voyage> findByAdresse(Adresse adresse) {
		return voyageRepo.findByAdresse(adresse);
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
		if (voyage.getAdresse() == null) {
			throw new VoyageException("probleme adresse");
		}
		if (voyage.getEpoque() == null) {
			throw new VoyageException("probleme epoque");
		}
		if (voyage.getMachine() == null || voyage.getMachine().getEtatMachine().equals(EtatMachine.Reservee) || voyage.getMachine().getEtatMachine().equals(EtatMachine.Inutilisable)) {
			throw new VoyageException("probleme machine");
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
