package ajc.sopra.TimeTravel.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import ajc.sopra.TimeTravel.model.Compte;

public interface CompteRepository extends JpaRepository<Compte, Integer>{
	Optional<Compte> findByLogin(String login);
}
