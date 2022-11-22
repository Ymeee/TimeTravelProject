package ajc.sopra.TimeTravel.restcontroller;

import java.util.Arrays;
import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.fasterxml.jackson.annotation.JsonView;

import ajc.sopra.TimeTravel.model.JsonViews;
import ajc.sopra.TimeTravel.model.Machine;
import ajc.sopra.TimeTravel.service.MachineService;

@RestController
@RequestMapping("/api/machine")
@CrossOrigin(origins = {"*"})
public class MachineRestController {
	@Autowired
	private MachineService machineSrv;
	
	private static final Logger LOGGER = LoggerFactory.getLogger(Machine.class);
	
	public MachineRestController() {
		LOGGER.info("rest ok");
	}

	@JsonView(JsonViews.Common.class)
	@GetMapping("/{id}")
	public Machine findById(@PathVariable Integer id) {
		return machineSrv.findById(id);
	}

	@GetMapping("")
	@JsonView(JsonViews.Common.class)
	public List<Machine> findAll() {
		return machineSrv.findAll();
	}

	@ResponseStatus(code = HttpStatus.CREATED)
	@PostMapping("")
	@JsonView(JsonViews.Common.class)
	public Machine create(@Valid @RequestBody Machine machine, BindingResult br) {
		if (br.hasErrors()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "données incorrectes");
		}
		LOGGER.info(machine.getTypeMachine().toString());
		return machineSrv.create(machine);
	}

	@DeleteMapping("/{id}")
	@ResponseStatus(code = HttpStatus.NO_CONTENT)
	public void deleteById(@PathVariable Integer id) {
		try {
			machineSrv.deleteById(id);
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "id inconnu");
		}
	}

	@PutMapping("/{id}")
	@JsonView(JsonViews.Common.class)
	public Machine update(@Valid @RequestBody Machine machine, BindingResult br, @PathVariable Integer id) {
		if (br.hasErrors()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "données incorrectes");
		}
		machine.setId(id);
		return machineSrv.update(machine);
	}

}
