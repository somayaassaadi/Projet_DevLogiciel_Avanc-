package com.produitsconsemetics.ProduitsCosmetics.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.produitsconsemetics.ProduitsCosmetics.model.Produit;


public interface ProduitRepository extends MongoRepository<Produit, String> {
	
    List<Produit> findByPrix(double prix);
    List<Produit> findByTitle(String title);


    
}
