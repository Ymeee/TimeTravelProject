package ajc.sopra.TimeTravel.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import ajc.sopra.TimeTravel.model.Client;

public interface ClientRepository extends JpaRepository<Client, Integer>{
	Optional<Client> findByMail(String mail);
	
	@Query("select c from Client c left join fetch c.passagers where c.id=:id")
	Optional<Client> findByIdFetchingPassagers(@Param("id") Integer id);

}
