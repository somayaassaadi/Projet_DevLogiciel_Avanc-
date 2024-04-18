import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit';
import { ProduitsService } from '../produits.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pageaccueilproduct',
  templateUrl: './pageaccueilproduct.component.html',
  styleUrl: './pageaccueilproduct.component.css'
})


export class PageaccueilproductComponent  implements OnInit{
  showLoginForm: boolean = false;
  title = 'projet_employee_front';
  public Produit!: Produit[] ;
  public editproduit!: Produit;
  public deleteProduit!: Produit;

  constructor(private produitService: ProduitsService, private router: Router){}
  selectedProduct: any; 


  ngOnInit() {
    this.getProducts();
  }

  public getProducts(): void {
    this.produitService.getProduits().subscribe(
      (response: Produit[]) => {
        this.Produit = response;
        console.log(this.Produit);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddProduit(addForm: NgForm): void {
    document!.getElementById('add-employee-form')!.click();
    this.produitService.addProduit(addForm.value).subscribe(
      (response: Produit) => {
        console.log(response);
        this.getProducts();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  /*public onUpdateEmloyee(employee: Produit): void {
    this.employeeService.updateProduit(employee).subscribe(
      (response: Produit) => {
        console.log(response);
        this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }*/
  public onUpdateProduit(id: string, produit: Produit): void {
    this.produitService.updateProduit(id, produit)
      .subscribe(
        response => {
          console.log(response);
          // Gérer la réponse en cas de succès
        },
        error => {
          console.log(error);
          // Gérer l'erreur en cas d'échec
        }
      );
  }

  public onDeleteProduit(produitId: string): void {
    this.produitService.deleteProduit(produitId).subscribe(
      (response: void) => {
        console.log(response);
        this.getProducts();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchProduit(key: string): void {
    console.log(key);
    const results: Produit[] = [];
    for (const produit of this.Produit) {
      if (produit.title.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || produit.description.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ) {
        results.push(produit);
      }
    }
    this.Produit = results;
    if (results.length === 0 || !key) {
      this.getProducts();
    }
  }

  public onOpenModal(produit: Produit, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEmployeeModal');
    }
    if (mode === 'edit') {
      this.editproduit = produit;
      button.setAttribute('data-target', '#updateEmployeeModal');
    }
    if (mode === 'delete') {
      this.deleteProduit = produit;
      button.setAttribute('data-target', '#deleteEmployeeModal');
    }
    container?.appendChild(button);
    button.click();
  }
  public onAdd(mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEmployeeModal');
    }
    container!.appendChild(button);
    button.click();
  }

  showProductDetails(product: any) {
    this.selectedProduct = product;
  }

  toggleLoginForm() {
    this.showLoginForm = !this.showLoginForm;
  }
  onLoginFormToggle() {
    this.showLoginForm = !this.showLoginForm;
  }

  logout() {
   
    this.router.navigate(['']);
  }

}
