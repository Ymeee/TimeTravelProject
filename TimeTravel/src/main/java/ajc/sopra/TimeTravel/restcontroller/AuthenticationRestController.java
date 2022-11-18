package ajc.sopra.TimeTravel.restcontroller;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

import ajc.sopra.TimeTravel.model.Admin;
import ajc.sopra.TimeTravel.model.Client;
import ajc.sopra.TimeTravel.model.Compte;
import ajc.sopra.TimeTravel.model.JsonViews;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/auth")
public class AuthenticationRestController {
	
	@GetMapping("")
	@JsonView(JsonViews.Common.class)
	public Compte authentication(@AuthenticationPrincipal Compte compte) {
		return compte;
	}


}
