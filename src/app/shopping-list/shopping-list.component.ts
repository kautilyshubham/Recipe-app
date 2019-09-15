import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shered/ingredient.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients:Ingredients[];
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.ingredients=this.shoppingService.getIngredients();
  }

  editItems(index){
    console.log(index);
    this.shoppingService.startedEditing.next(index);
  }

}
