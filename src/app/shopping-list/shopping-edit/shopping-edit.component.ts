import { ShoppingService } from './../shopping.service';
import { Ingredients } from './../../shered/ingredient.model';
import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('shoppingEditForm') slForm: NgForm;
 
  subscription: Subscription;
  editingIndex: number;
  editMode = false;
  editedItem: Ingredients;

  //@Output() ingredientAdded= new EventEmitter<Ingredients>();
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.subscription = this.shoppingService.startedEditing.subscribe(
                          (index: number)=>{
                            this.editingIndex = index;
                            this.editMode = true;
                            this.editedItem= this.shoppingService.getIngredient(index);
                            this.slForm.setValue({
                              'name': this.editedItem.name,
                              'amount': this.editedItem.amount
                            })
                            }
                          )    
              };

    ngOnDestroy(){
      this.subscription.unsubscribe();
    }

  onaddItem(form: NgForm){
    const newIngredient= new Ingredients(form.value.name,form.value.amount);    
    if(this.editMode){
        this.shoppingService.updateIngredient(this.editingIndex, newIngredient) ; 
        this.editMode = false;
        form.reset();
        
    }
    else{
    //this.ingredientAdded.emit(newIngredient);
    this.shoppingService.addIngredients(newIngredient);
    form.reset();
    }
  }

  deleteItem(){
    this.shoppingService.removeItem(this.editingIndex);
    this.slForm.reset();
    this.editMode = false;
  }

  clearForm(){
        this.slForm.reset();
        this.editMode = false;
  }

}
