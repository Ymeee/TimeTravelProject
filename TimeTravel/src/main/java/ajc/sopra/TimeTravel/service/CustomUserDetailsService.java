package ajc.sopra.TimeTravel.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import ajc.sopra.TimeTravel.model.Compte;
import ajc.sopra.TimeTravel.repository.CompteRepository;

@Service
public class CustomUserDetailsService implements UserDetailsService {

	@Autowired
	private CompteRepository compteRepo;

	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Compte compte=compteRepo.findByLogin(username).orElseThrow(() -> {
			throw new UsernameNotFoundException("utilisateur inconnu");
		});
		return( compte );
	}

}
