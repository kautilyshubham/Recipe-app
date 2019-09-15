import { Router } from '@angular/router';
// import { Recipe } from './../recipes.model';
import { Ingredients } from './../../shered/ingredient.model';
import { RecipyServices } from './../recipy.services';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipeEditForm: FormGroup;
  id: number;
  editMode=false;


  constructor(private router: Router,
              private route : ActivatedRoute,
              private recipeService: RecipyServices,
             ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (param: Params) =>{
        this.id= +param['id'];
        this.editMode= param['id'] != null;
        this.initForm();
      }
    )
  };//ngOnInit

  private initForm(){
    let recipeName = "";
    let recipeImage = "";
    let recipeDesc = "";
    let recipeIngredient = new FormArray([]);

    if(this.editMode){
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImage = recipe.imagepath;
      recipeDesc = recipe.details;
      if (recipe['ingredients']){                            //we are checking if ingredients are in  recipe
        for(let ingredient of recipe.ingredients){          // looping through an array
          recipeIngredient.push( new FormGroup({            // for each item in loop pushing it into the  array
            'name': new FormControl(ingredient.name, [Validators.required]) ,
            'amount': new FormControl(ingredient.amount, 
              [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          })
        )
        }
      };
    }

    this.recipeEditForm= new FormGroup({
      "name": new FormControl(recipeName, [Validators.required, Validators.minLength(5)]),
      "details": new FormControl(recipeDesc, [Validators.required, Validators.minLength(10)]),
      "imagepath": new FormControl(recipeImage, Validators.required),
      "ingredients": recipeIngredient,
    })
  }//initform

  onFormSubmit(){
  //   const newRecipe = new Recipe(this.recipeEditForm.value['name'], 
  //   this.recipeEditForm.value['details'],
  //   this.recipeEditForm.value['imagePath'], 
  //   this.recipeEditForm.value['ingredients']
  // );

    if(this.editMode){
      this.recipeService.updateRecippes(this.id, this.recipeEditForm.value);
      
    } else{
      this.recipeService.addItemstoRecipes(this.recipeEditForm.value);
      
      
    }
    this.cancelForm();

  }

  onAddIngredients(){
    const control = new FormGroup({
      'name': new FormControl (null, [Validators.required]),
      'amount': new FormControl (null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
     });
    (<FormArray>this.recipeEditForm.get('ingredients')).push(control);

  }

  cancelForm(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onDeleteIngredient(index: number){
          (<FormArray>this.recipeEditForm.get('ingredients')).removeAt(index);
  }


}
