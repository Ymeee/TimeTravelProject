package service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import exception.AdminException;
import exception.IdException;
import model.Admin;
import repository.AdminRepository;

@Service
public class AdminService {

	@Autowired
	private AdminRepository adminRepo;
	
	public List<Admin> findAll() {
		return adminRepo.findAll();
	}

	public Admin findById(Integer id) {
//		return produitRepo.findById(id).orElseThrow(()->{
//			throw new IdException();
//		});
		return adminRepo.findById(id).orElseThrow(IdException::new);
	}
	
	public Admin create(Admin admin) {
		if (admin.getId() != null) {
			throw new AdminException("admin deja dans la base");
		}
		return save(admin);

	}

	public Admin update(Admin admin) {
		if (admin.getId() == null || !adminRepo.existsById(admin.getId())) {
			throw new IdException();
		}
		return save(admin);
	}

	private Admin save(Admin admin) {
		if (admin.getNom() == null || admin.getNom().isBlank() || admin.getNom().length() > 35) {
			throw new AdminException("probleme nom");
		}
		if (admin.getPrenom() == null || admin.getPrenom().isBlank() || admin.getPrenom().length() > 30) {
			throw new AdminException("probleme prenom");
		}
		if (admin.getLogin() == null || admin.getLogin().isBlank() || admin.getLogin().length() > 35) {
			throw new AdminException("probleme login");
		}
		if (admin.getPassword() == null || admin.getPassword().isBlank() || admin.getPassword().length() > 100) {
			throw new AdminException("probleme login");
		}
		return adminRepo.save(admin);
	}

	public void delete(Admin admin) {
		adminRepo.delete(admin);
	}

	public void deleteById(Integer id) {
		adminRepo.deleteById(id);
	}
}
