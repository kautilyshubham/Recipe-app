import { AuthGuardService } from './../auth/auth-guard.service';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { RepipeDetailComponent } from './repipe-detail/repipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes.component';

const recipesRouting: Routes=[
    {path: "", component: RecipesComponent,  children:[
        {path: "", component: RecipeStartComponent},      
        {path: "new", component: RecipeEditComponent, canActivate: [AuthGuardService]}, 
        {path: ":id", component: RepipeDetailComponent},
        {path: ":id/edit", component: RecipeEditComponent, canActivate: [AuthGuardService]},      
             
        ]},
];
@NgModule({
imports:[
    RouterModule.forChild(recipesRouting)
],
exports:[RouterModule ]
})
export class RecipesRoutingModule{

}