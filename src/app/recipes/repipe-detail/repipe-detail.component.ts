import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipyServices } from './../recipy.services';
import { ShoppingService } from './../../shopping-list/shopping.service';
import { Recipe } from './../recipes.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-repipe-detail',
  templateUrl: './repipe-detail.component.html',
  styleUrls: ['./repipe-detail.component.css']
})
export class RepipeDetailComponent implements OnInit {
 recipy :Recipe;
 id: number;
  constructor(private recService: RecipyServices,
              private router : Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (param: Params) =>{
        this.id= +param['id'];
        this.recipy= this.recService.getRecipe(this.id);
      }
    )
  }

  addToShopping(){
    this.recService.addingredientstoShopping(this.recipy.ingredients);
  }

  gotoedit(){
    this.router.navigate(['edit'],{relativeTo: this.route});
  }

  removeRecipe(){
    this.recService.deleteRecipe(this.id);
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
