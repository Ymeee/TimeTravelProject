package repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import model.Adresse;
import model.Voyage;

public interface VoyageRepository extends JpaRepository<Voyage, Integer>{
	List<Voyage> findByAdresse(Adresse adresse);
}
