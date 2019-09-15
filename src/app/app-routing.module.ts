import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SingInComponent } from './auth/sing-in/sing-in.component';



const appRoute: Routes=[
    {path: "", component: HomeComponent },
    {path: "recipes", loadChildren: "./recipes/recipes.module#RecipesModule"},
    {path: "shopping-list", component: ShoppingListComponent },
    {path: "signup", component: SignUpComponent },
    {path: "signin", component: SingInComponent },
    
    
  
  ];

@NgModule({
 imports:[
    RouterModule.forRoot(appRoute)
 ],
 exports:[RouterModule],
})
export class AppRoutingModule{

}