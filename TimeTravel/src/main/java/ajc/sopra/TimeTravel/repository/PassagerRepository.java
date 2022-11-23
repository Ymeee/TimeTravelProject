package ajc.sopra.TimeTravel.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import ajc.sopra.TimeTravel.model.Client;
import ajc.sopra.TimeTravel.model.Passager;

public interface PassagerRepository extends JpaRepository<Passager, Integer>{

	@Transactional
	@Modifying
	@Query("delete from Passager p where p.client=:client")
	int deleteByClient(@Param("client") Client client);
}
