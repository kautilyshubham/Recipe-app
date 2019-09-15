import { Ingredients } from './../shered/ingredient.model';
import { EventEmitter } from "@angular/core";
import { Subject } from 'rxjs';


export class ShoppingService {
    startedEditing = new Subject<number>();

    private  ingredients:Ingredients[]=[
        new Ingredients("Apple", 41),
        new Ingredients("Banana", 10)
      ];

    getIngredients(){
        return this.ingredients;
    }

    getIngredient(index){
                return this.ingredients[index];
    }
    addIngredients(ingredientsDetails: Ingredients){
        this.ingredients.push(ingredientsDetails);
    }
    addIngredient(ingred: Ingredients[]){
        for (let ing of ingred ){
            this.addIngredients(ing);
        }
    }

    updateIngredient(index: number, newIngr: Ingredients){
        this.ingredients[index] = newIngr;
        
    }

    removeItem(index: number){
        this.ingredients.splice(index, 1);
    }
}