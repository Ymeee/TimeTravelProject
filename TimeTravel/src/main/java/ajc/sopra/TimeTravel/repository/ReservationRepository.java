package ajc.sopra.TimeTravel.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ajc.sopra.TimeTravel.model.Reservation;

public interface ReservationRepository extends JpaRepository<Reservation, Integer>{

}
