package repository;

import org.springframework.data.jpa.repository.JpaRepository;

import model.Admin;
import model.Machine;

public interface MachineRepository extends JpaRepository<Machine, Integer>{

}
