import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit';
import { ProduitsService } from '../produits.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pageaccueilproduct',
  templateUrl: './pageaccueilproduct.component.html',
  styleUrl: './pageaccueilproduct.component.css'
})


export class PageaccueilproductComponent  implements OnInit{
  showLoginForm: boolean = false;
  title = 'projet_employee_front';
  public employees!: Produit[] ;
  public editEmployee!: Produit;
  public deleteEmployee!: Produit;

  constructor(private employeeService: ProduitsService){}
  selectedProduct: any; 


  ngOnInit() {
    this.getEmployees();
  }

  public getEmployees(): void {
    this.employeeService.getProduits().subscribe(
      (response: Produit[]) => {
        this.employees = response;
        console.log(this.employees);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddEmloyee(addForm: NgForm): void {
    document!.getElementById('add-employee-form')!.click();
    this.employeeService.addProduit(addForm.value).subscribe(
      (response: Produit) => {
        console.log(response);
        this.getEmployees();
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
  public onUpdateEmloyee(id: string, produit: Produit): void {
    this.employeeService.updateProduit(id, produit)
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

  public onDeleteEmloyee(employeeId: string): void {
    this.employeeService.deleteProduit(employeeId).subscribe(
      (response: void) => {
        console.log(response);
        this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchEmployees(key: string): void {
    console.log(key);
    const results: Produit[] = [];
    for (const employee of this.employees) {
      if (employee.title.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.description.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ) {
        results.push(employee);
      }
    }
    this.employees = results;
    if (results.length === 0 || !key) {
      this.getEmployees();
    }
  }

  public onOpenModal(employee: Produit, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEmployeeModal');
    }
    if (mode === 'edit') {
      this.editEmployee = employee;
      button.setAttribute('data-target', '#updateEmployeeModal');
    }
    if (mode === 'delete') {
      this.deleteEmployee = employee;
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

}
