import { AuthService } from './../auth/auth.servise';
import { RecipyServices } from './../recipes/recipy.services';
import { Recipe } from './../recipes/recipes.model';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/Operators"



@Injectable()
export class RecipeHttpService{
    constructor(private http: Http, private recipeService: RecipyServices,
                private authService: AuthService){}
    saveData(){
        let tk = this.authService.getTocken();        
        return this.http.put("https://recipe-e5a9e.firebaseio.com/Recipes.json?auth=" +tk , this.recipeService.getRecipes())
    }

    getData(){
        let tk = this.authService.getTocken();
         this.http.get("https://recipe-e5a9e.firebaseio.com/Recipes.json?auth=" + tk )
        .pipe(map(
            (response: Response)=>{
                const data: Recipe[] = response.json();
                for(let item of data){
                    if(!item['ingredients']){
                        data['ingredients']=[];
                    }
                }
                return data;
            }
        ))
        .subscribe(
            (recipes: Recipe[])=>{
                this.recipeService.setRecipes(recipes);
            }
        )
        
    }
}