package com.produitsconsemetics.ProduitsCosmetics.ServiceImplem;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.produitsconsemetics.ProduitsCosmetics.SpringSecurity.JwtService;
import com.produitsconsemetics.ProduitsCosmetics.model.User;
import com.produitsconsemetics.ProduitsCosmetics.repository.UserRepo;
import com.produitsconsemetics.ProduitsCosmetics.service.UserService;

import java.security.NoSuchAlgorithmException;
import java.util.*;

@Service
public class UserImplem implements UserService {

	   @Autowired
	    UserRepo userRepo;
	    @Autowired
	    BCryptPasswordEncoder bCryptPasswordEncoder;
	    @Autowired
	    JwtService jwtService;

	@Override
	public User register(User user) {
		String encodedPassword = bCryptPasswordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);
        return userRepo.save(user);

	}

	@Override
	public Map<String, Object> login(String email, String password) throws NoSuchAlgorithmException {
	    Optional<User> user = userRepo.findByEmail(email);
        if (user.isEmpty() || !bCryptPasswordEncoder.matches(password, user.get().getPassword()))
            return null;
        Map<String, Object> result = new HashMap<>();
        result.put("jwt", jwtService.generateToken(user.get()));
        result.put("email", email);
        return result;

	}

	
    
}

