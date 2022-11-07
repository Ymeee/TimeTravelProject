package repository;

import org.springframework.data.jpa.repository.JpaRepository;

import model.Admin;
import model.Reservation;

public interface ReservationRepository extends JpaRepository<Reservation, Integer>{

}
