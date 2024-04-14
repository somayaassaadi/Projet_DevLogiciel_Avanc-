import { Component } from '@angular/core';
import { ProduitsService } from '../produits.service';
import { User } from '../User';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user: User = { name: '', email: '', password: '' }; // Instance de User pour stocker les informations du formulaire

  constructor(private produitservice: ProduitsService,private router: Router,
  ) {} // Injection du service AuthService

  // Fonction pour gérer la soumission du formulaire d'inscription
  register() {
    this.produitservice.registerUser(this.user).subscribe(
      (response) => {
        // Gérer la réponse du backend après l'inscription réussie
        console.log("Inscription réussie :", response);
        this.router.navigate(['/login']);
        // Rediriger vers une autre page après l'inscription réussie (par exemple, la page de connexion)
        // this.router.navigate(['/login']); // Vous pouvez rediriger l'utilisateur vers la page de connexion si nécessaire
      },
      (error) => {
        // Gérer les erreurs d'inscription
        console.error("Erreur d'inscription :", error);
        // Afficher un message d'erreur à l'utilisateur
        // alert("Une erreur s'est produite lors de l'inscription. Veuillez réessayer.");
      }
    );
  }

}
