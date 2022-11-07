package repository;

import org.springframework.data.jpa.repository.JpaRepository;

import model.Admin;
import model.Voyage;

public interface VoyageRepository extends JpaRepository<Voyage, Integer>{

}
