package ajc.sopra.TimeTravel.restcontroller;

import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.fasterxml.jackson.annotation.JsonView;

import ajc.sopra.TimeTravel.model.Admin;
import ajc.sopra.TimeTravel.model.Client;
import ajc.sopra.TimeTravel.model.Compte;
import ajc.sopra.TimeTravel.model.JsonViews;
import ajc.sopra.TimeTravel.model.Machine;
import ajc.sopra.TimeTravel.service.AdminService;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = {"*"})
public class AdminRestController {
	
	@Autowired
	private AdminService adminSrv;
	

	
	@JsonView(JsonViews.Common.class)
	@PostMapping("/inscription")
	public Admin inscription(@Valid @RequestBody Admin admin, BindingResult br) {
		if (br.hasErrors()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "données incorrectes");
		}
		return adminSrv.save(admin);
	}
	
	@JsonView(JsonViews.Common.class)
	@GetMapping("/{id}")
	public Admin findById(@PathVariable Integer id) {
		return adminSrv.findById(id);
	}
	
	@GetMapping("")
	@JsonView(JsonViews.Common.class)
	public List<Admin> findAll() {
		return adminSrv.findAll();
	}
	
	
	
}
