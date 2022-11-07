package service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import exception.AdminException;
import exception.IdException;
import exception.MachineException;
import model.Machine;
import repository.MachineRepository;

@Service
public class MachineService {

	@Autowired
	private MachineRepository machineRepo;
	
	public List<Machine> findAll() {
		return machineRepo.findAll();
	}

	public Machine findById(Integer id) {
		return machineRepo.findById(id).orElseThrow(IdException::new);
	}
	
	public Machine create(Machine machine) {
		if (machine.getId() != null) {
			throw new AdminException("machine deja dans la base");
		}
		return save(machine);

	}

	public Machine update(Machine machine) {
		if (machine.getId() == null || !machineRepo.existsById(machine.getId())) {
			throw new IdException();
		}
		return save(machine);
	}

	private Machine save(Machine machine) {
		if (machine.getDateMachine() == null) {
			throw new MachineException("probleme date machine");
		}
		if (machine.getTypeMachine() == null) {
			throw new MachineException("probleme type machine");
		}
		if (machine.getEtatMachine() == null) {
			throw new MachineException("probleme etat machine");
		}
		return machineRepo.save(machine);
	}

	public void delete(Machine machine) {
		machineRepo.delete(machine);
	}

	public void deleteById(Integer id) {
		machineRepo.deleteById(id);
	}
}
