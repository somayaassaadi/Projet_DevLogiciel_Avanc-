package com.produitsconsemetics.ProduitsCosmetics.model;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;


@AllArgsConstructor
@NoArgsConstructor
public class Produit {
	private String id;
	private String title;
	private String description;
	private Long prix;
	private String iconproduit;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Long getPrix() {
		return prix;
	}
	public void setPrix(Long prix) {
		this.prix = prix;
	}
	public String getIconproduit() {
		return iconproduit;
	}
	public void setIconproduit(String iconproduit) {
		this.iconproduit = iconproduit;
	}
	
}
