package ajc.sopra.TimeTravel.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import ajc.sopra.TimeTravel.exception.AdminException;
import ajc.sopra.TimeTravel.exception.IdException;
import ajc.sopra.TimeTravel.exception.MachineException;
import ajc.sopra.TimeTravel.model.Machine;
import ajc.sopra.TimeTravel.repository.MachineRepository;

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
		if (machine.getDateMachine() == null || machine.getDateMachine().isAfter(LocalDate.now())) {
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
