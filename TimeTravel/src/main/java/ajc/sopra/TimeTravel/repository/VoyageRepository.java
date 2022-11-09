package ajc.sopra.TimeTravel.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import ajc.sopra.TimeTravel.model.Adresse;
import ajc.sopra.TimeTravel.model.Voyage;

public interface VoyageRepository extends JpaRepository<Voyage, Integer>{
	List<Voyage> findByAdresse(Adresse adresse);
}
