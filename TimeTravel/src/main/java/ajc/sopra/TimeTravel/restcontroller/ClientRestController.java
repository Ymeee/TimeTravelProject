package ajc.sopra.TimeTravel.restcontroller;

import java.lang.reflect.Field;
import java.time.LocalDate;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.util.ReflectionUtils;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.fasterxml.jackson.annotation.JsonView;

import ajc.sopra.TimeTravel.model.Adresse;
import ajc.sopra.TimeTravel.model.Client;
import ajc.sopra.TimeTravel.model.JsonViews;
import ajc.sopra.TimeTravel.model.Passager;
import ajc.sopra.TimeTravel.service.ClientService;
import ajc.sopra.TimeTravel.service.PassagerService;

@RestController
@RequestMapping("/api/client")
@CrossOrigin(origins = {"*"})
public class ClientRestController {

	@Autowired
	private ClientService clientSrv;
	
	@Autowired
	private PassagerService passagerSrv;

	@JsonView(JsonViews.ClientWithPassager.class)
	@GetMapping("/{id}/passager")
	public Client findByIdWithPassager(@PathVariable Integer id) {
		return clientSrv.findByIdFetchPassagers(id);
	}
	
	@GetMapping("/check/login/{login}")
	public boolean checkLoginExists(@PathVariable String login) {
		return clientSrv.checkLoginExists(login);
	}

	
	@GetMapping("/check/mail/{mail}")
	public boolean checkEmailExists(@PathVariable String mail) {
		return clientSrv.checkMailExists(mail);
	}
	
	@ResponseStatus(code = HttpStatus.CREATED)
	@PostMapping("/{id}/passager")
	@JsonView(JsonViews.Common.class)
	public Passager create(@Valid @RequestBody Passager passager, @PathVariable Integer id,BindingResult br) {
		if (br.hasErrors()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "donn??es incorrectes");
		}
		passager.setClient(clientSrv.findById(id));
		return passagerSrv.create(passager);
	}

		
	
	@JsonView(JsonViews.Common.class)
	@PostMapping("/inscription")
	public Client inscription(@Valid @RequestBody Client client, BindingResult br) {
		if (br.hasErrors()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "donn??es incorrectes");
		}
		return clientSrv.save(client);
	}
	
	@JsonView(JsonViews.ClientWithPassager.class)
	@GetMapping("/{id}")
	public Client findById(@PathVariable Integer id) {
		return clientSrv.findById(id);
	}
	
	@GetMapping("")
	@JsonView(JsonViews.Common.class)
	public List<Client> findAll() {
		return clientSrv.findAll();
	}
	
	@PatchMapping("/{id}")
	@JsonView(JsonViews.Common.class)
	public Client patch(@RequestBody Map<String, Object> fields, @PathVariable Integer id) {
		Client client = clientSrv.findById(id);
		fields.forEach((k, v) -> {
			if (k.equals("adresse")) {
				Map<String, Object> mapAdresse = (Map<String, Object>) v;
				mapAdresse.forEach((kAdresse, vAdresse) -> {
					Field fieldAdresse = ReflectionUtils.findField(Adresse.class, kAdresse);
					ReflectionUtils.makeAccessible(fieldAdresse);
					ReflectionUtils.setField(fieldAdresse, client.getAdresse(), vAdresse);
				});
			}else if(k.equals("anniversaire")) {
				client.setAnniversaire(LocalDate.parse(v.toString()));
			} else {
				Field field = ReflectionUtils.findField(Client.class, k);
				ReflectionUtils.makeAccessible(field);
				ReflectionUtils.setField(field, client, v);
			}
		});
		return clientSrv.save(client);
	}
	
}
