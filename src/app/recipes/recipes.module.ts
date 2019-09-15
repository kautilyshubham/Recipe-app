import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shered/shared.module';
import { RecipesRoutingModule } from './Recipes.routing.module';
import { RecipeItemComponent } from './repipe-list/recipe-item/recipe-item.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RepipeDetailComponent } from './repipe-detail/repipe-detail.component';
import { RepipeListComponent } from './repipe-list/repipe-list.component';
import { RecipesComponent } from './recipes.component';

@NgModule({
    declarations:[
        RecipesComponent,
        RepipeListComponent,
        RepipeDetailComponent,
        RecipeEditComponent,
        RecipeStartComponent,
        RecipeItemComponent,
        
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        RecipesRoutingModule,
        SharedModule,
    ]
})
export class RecipesModule{

}