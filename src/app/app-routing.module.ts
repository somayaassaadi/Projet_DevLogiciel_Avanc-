import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { app } from '../../server';
import { ListProductComponent } from './list-product/list-product.component';
import { PageaccueilproductComponent } from './pageaccueilproduct/pageaccueilproduct.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  { path: '', component: ListProductComponent },
  {path: 'login', component:LoginComponent},
  {path: 'accueil', component:PageaccueilproductComponent},
  {path: 'register', component:RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
