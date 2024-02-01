package com.produitsconsemetics.ProduitsCosmetics.controller;

import java.lang.StackWalker.Option;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
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
	
	
	@PostMapping("/produits")
	public ResponseEntity<?> createProduit(@RequestBody Produit produit){
		
		try {
			produitRepo.save(produit);
			return new ResponseEntity<Produit>(produit,HttpStatus.OK);
		}catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
			
		}
	}
	
	@GetMapping("/produits/{id}")
	public ResponseEntity<?> findProduit(@PathVariable("id") String id){
		Optional<Produit> produitOptional = produitRepo.findById(id);
		if(produitOptional.isPresent()) {
			return new ResponseEntity<>(produitOptional.get(), HttpStatus.OK);
		}else {
			return new ResponseEntity<>("no product find"+id,HttpStatus.NOT_FOUND);
		}
	}
	
	@PutMapping("/produits/{id}")
	public ResponseEntity<?> UpdateProduit(@PathVariable("id") String id, @RequestBody Produit produit){
		Optional<Produit> produitOptional = produitRepo.findById(id);
		if(produitOptional.isPresent()) {
			Produit produitsave = produitOptional.get();
			produitsave.setTitle(produit.getTitle() != null ? produit.getTitle():produitsave.getTitle());
			produitsave.setDescription(produit.getDescription() != null ? produit.getDescription():produitsave.getDescription());
			produitsave.setPrix(produit.getPrix() != null ? produit.getPrix():produitsave.getPrix());
			produitsave.setIconproduit(produit.getIconproduit() != null ? produit.getIconproduit():produitsave.getIconproduit());
            produitRepo.save(produitsave);
			return new ResponseEntity<>(produitsave, HttpStatus.OK);
		}else {
			return new ResponseEntity<>("no product find"+id,HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping("produits/{id}")
	public ResponseEntity<?> deleteproductByid(@PathVariable("id") String id){
		try {
			produitRepo.deleteById(id);
			return new ResponseEntity<>("Successfuly"+id, HttpStatus.OK);
			
		}catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
		}
	}
	

}
