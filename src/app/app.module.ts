import { NgModule, PLATFORM_ID, Inject } from '@angular/core';
import { HttpClientModule , provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ProduitsService } from './produits.service';
import { LoginComponent } from './login/login.component';
import { PageaccueilproductComponent } from './pageaccueilproduct/pageaccueilproduct.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    LoginComponent,
    PageaccueilproductComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule
  ],
  providers: [
   ProduitsService,
   provideHttpClient(withFetch())
   

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
