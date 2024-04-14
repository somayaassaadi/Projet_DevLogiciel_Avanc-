import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ProduitsService } from '../produits.service';
import { Produit } from '../produit';
import { Router } from '@angular/router';



@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent implements OnInit {
  showLoginForm: boolean = false;
  title = 'projet_employee_front';
  public produits!: Produit[] ;

  constructor(private produitsService: ProduitsService, private router: Router){}
  selectedProduct: any; 

  ngOnInit() {
    this.getProducts();
  }

  public getProducts(): void {
    this.produitsService.getProduits().subscribe(
      (response: Produit[]) => {
        this.produits = response;
        console.log(this.produits);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public searchProduct(key: string): void {
    console.log(key);
    const results: Produit[] = [];
    for (const produit of this.produits) {
      if (produit.title.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || produit.description.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ) {
        results.push(produit);
      }
    }
    this.produits = results;
    if (results.length === 0 || !key) {
      this.getProducts();
    }
  }
  showProductDetails(product: any) {
    this.selectedProduct = product;
  }
  onLoginFormToggle() {
    this.showLoginForm = !this.showLoginForm;
  }

  login() {
    this.router.navigate(['/login']);
  }

}
