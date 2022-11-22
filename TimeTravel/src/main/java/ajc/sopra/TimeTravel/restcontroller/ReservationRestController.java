package ajc.sopra.TimeTravel.restcontroller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.fasterxml.jackson.annotation.JsonView;

import ajc.sopra.TimeTravel.model.JsonViews;
import ajc.sopra.TimeTravel.model.Passager;
import ajc.sopra.TimeTravel.model.Reservation;
import ajc.sopra.TimeTravel.service.ReservationService;

@RestController
@RequestMapping("/api/reservation")
@CrossOrigin(origins = {"*"})
public class ReservationRestController {
	
	@Autowired
	private ReservationService reservationSrv;
	
	@JsonView(JsonViews.Common.class)
	@PostMapping("")
	public Reservation create(@Valid @RequestBody Reservation reservation, BindingResult br) {
		if (br.hasErrors()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "données incorrectes");
		}
		return reservationSrv.save(reservation);
	}
	

	@JsonView(JsonViews.ReservationAll.class)
	@GetMapping("")
	public List<Reservation> findAll(){
		return reservationSrv.findAll();
	}
	
	@PutMapping("/{id}")
	@JsonView(JsonViews.Reservation.class)
	public Reservation update(@Valid @RequestBody Reservation reservation, BindingResult br, @PathVariable Integer id) {
		if (br.hasErrors()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "données incorrectes");
		}
		reservation.setId(id);
		return reservationSrv.update(reservation);
	}
}
