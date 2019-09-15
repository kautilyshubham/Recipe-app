import { Subscription } from 'rxjs';
import { RecipyServices } from './../recipy.services';
import { Recipe } from './../recipes.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-repipe-list',
  templateUrl: './repipe-list.component.html',
  styleUrls: ['./repipe-list.component.css']
})
export class RepipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[]=[];
  subscription: Subscription;
  constructor(private recipyService: RecipyServices,
              private router: Router,
              private route: ActivatedRoute,
             ) { }

  ngOnInit() {
   this.subscription= this.recipyService.recipeChanged.subscribe( 
      (recipe: Recipe[])=>{
        this.recipes = recipe;
      }
    )
    this.recipes=this.recipyService.getRecipes();
           
    }
  
    gotoedit(){
      this.router.navigate(['new'], {relativeTo: this.route});
    }

    ngOnDestroy(){
      this.subscription.unsubscribe();
    }
}
