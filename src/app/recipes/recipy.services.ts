import { Subject } from 'rxjs';
import { ShoppingService } from './../shopping-list/shopping.service';
import { Recipe } from './recipes.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from '../shered/ingredient.model';


@Injectable()
export class RecipyServices{
    recipeSelected= new EventEmitter<Recipe>();
    recipeChanged = new Subject<Recipe[]>();


    private recipes: Recipe[]= [
        new Recipe(
        "A testy Schnizwan ",
         "A super testy schnizwan eat it hurry up !!",
         "https://i2.wp.com/foodoncall.co.in/wp-content/uploads/2017/10/veg-schezwan-noodles.jpg?resize=600%2C600&ssl=1",
        [
            new Ingredients("Chaumin",1),
            new Ingredients("Chicken",2),
            new Ingredients("rice",5)
            
        ]),
         new Recipe(
         "Big Fat Burger", 
         "What else yu need to say ???",
         "https://www.seriouseats.com/recipes/images/2015/07/20150728-homemade-whopper-food-lab-35-1500x1125.jpg",
         [
             new Ingredients("Buns",1),
             new Ingredients("Meat",1)
         ])
        ];

        constructor(private sopService: ShoppingService){}
    getRecipes(){
       return this.recipes.slice();
    }   
    setRecipes(newrecipe: Recipe[]){
        this.recipes = newrecipe; 
        this.recipeChanged.next(this.recipes.slice());
    }

    getRecipe( index: number){
        return this.recipes[index];
        }

    addingredientstoShopping(ingredients : Ingredients[]){
        this.sopService.addIngredient(ingredients);
    }

    addItemstoRecipes(newRecipy: Recipe){
        this.recipes.push(newRecipy);
        this.recipeChanged.next(this.recipes.slice());
    }
    updateRecippes(index: number, recipy: Recipe){
        this.recipes[index] = recipy;
        this.recipeChanged.next(this.recipes.slice());
    }
    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes);
    }
}