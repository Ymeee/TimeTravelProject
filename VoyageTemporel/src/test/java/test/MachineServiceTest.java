package test;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.annotation.Commit;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.transaction.annotation.Transactional;

import config.JpaConfig;
import model.EtatMachine;
import model.Machine;
import model.TypeMachine;
import service.MachineService;
import java.time.LocalDate;



@ExtendWith(SpringExtension.class)
@ContextConfiguration(classes = { JpaConfig.class })
@Transactional
//par defaut rollback a la fin de chaque transaction
class MachineServiceTest {

	@Autowired
	MachineService machineSrv;

	@Test
	void InjectionMachineServicetest() {
		assertNotNull(machineSrv);
	}
	
	@Test
	@Commit
	@Disabled
	void initMachine() {
		machineSrv.create(new Machine(LocalDate.parse("2020-06-25"),TypeMachine.TARDIS,EtatMachine.Disponible));
	}

	

}
