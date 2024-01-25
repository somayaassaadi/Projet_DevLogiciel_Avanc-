package com.produitsconsemetics.ProduitsCosmetics.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.produitsconsemetics.ProduitsCosmetics.model.Produit;
import com.produitsconsemetics.ProduitsCosmetics.repository.ProduitRepository;


@RestController
public class ProduitController {
	
	@Autowired
	private ProduitRepository produitRepo;
	
	
	@GetMapping("/produits")
	public ResponseEntity<?> getAllProduct(){
		List<Produit> produits = produitRepo.findAll();
		if(produits.size()> 0) {
			 return new ResponseEntity<List<Produit>>(produits, HttpStatus.OK);
		}else {
			return new ResponseEntity<>("no product",HttpStatus.NOT_FOUND);
		}
		}

}
