import { AuthGuardService } from './auth/auth-guard.service';
import { RecipeHttpService } from './shered/recipeHttp.service';
import { AuthModule } from './auth/auth.module';
import { componentFactoryName } from '@angular/compiler';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ShoppingModule } from './shopping-list/shopping.module';
import { SharedModule } from './shered/shared.module';
import { RecipyServices } from './recipes/recipy.services';
import { AppRoutingModule } from './app-routing.module';
import { ShoppingService } from './shopping-list/shopping.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './auth/auth.servise';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    SharedModule,
    ShoppingModule,
    AuthModule,
  ],
  providers: [RecipyServices,ShoppingService, RecipeHttpService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
