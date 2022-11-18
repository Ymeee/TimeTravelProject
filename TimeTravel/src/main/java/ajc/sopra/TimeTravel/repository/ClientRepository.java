package ajc.sopra.TimeTravel.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import ajc.sopra.TimeTravel.model.Client;

public interface ClientRepository extends JpaRepository<Client, Integer>{
	Optional<Client> findByMail(String mail);
}
