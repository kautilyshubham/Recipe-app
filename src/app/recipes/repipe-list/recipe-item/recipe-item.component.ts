import { Recipe } from './../../recipes.model';
import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
 @Input() recip: Recipe;
 @Input() index: number;
  ngOnInit(){ 
  }

  


}
