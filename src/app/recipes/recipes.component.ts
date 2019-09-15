import { RecipyServices } from './recipy.services';
import { Recipe } from './recipes.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  selectedRecipy: Recipe;
  constructor(private recipeServic: RecipyServices) { }

  ngOnInit() {
    this.recipeServic.recipeSelected.subscribe(
      (recipe: Recipe) => {
          this.selectedRecipy=recipe;
      }
    ) ; 
  }

}
