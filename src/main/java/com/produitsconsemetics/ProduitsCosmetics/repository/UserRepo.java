package com.produitsconsemetics.ProduitsCosmetics.repository;

import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.produitsconsemetics.ProduitsCosmetics.model.User;


public interface UserRepo extends MongoRepository<User, String> {
	
	Optional<User> findByEmail (String email);


    
}
