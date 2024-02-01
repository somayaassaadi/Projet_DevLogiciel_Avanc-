package com.produitsconsemetics.ProduitsCosmetics.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.produitsconsemetics.ProduitsCosmetics.model.Produit;


public interface ProduitRepository extends MongoRepository<Produit, String> {
	
	
    
}
