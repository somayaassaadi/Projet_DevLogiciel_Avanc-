import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitsService } from '../produits.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  constructor(
    private router: Router,
    private produitservice: ProduitsService // Injection du service AuthService
  ) {}

  login() {
    // Vérifier si les champs email et password sont vides
    if (!this.email || !this.password) {
      alert("Veuillez remplir tous les champs.");
      return;
    }
    this.produitservice.login(this.email, this.password).subscribe(
      (response) => {
        console.log("Connexion réussie :", response);
        // Rediriger vers une autre page après la connexion réussie (par exemple, la page d'accueil)
        this.router.navigate(['/accueil']); // Modifiez '/home' avec le chemin de votre choix
      },
      (error) => {
        // Gérer les erreurs de connexion
        console.error("Erreur de connexion :", error);
        // Afficher un message d'erreur à l'utilisateur (par exemple, email ou mot de passe incorrect)
        alert("Email ou mot de passe incorrect.");
      }
    );
  }

 
 
}
