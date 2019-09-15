import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-start',
  template: `
    <h1>
      select a recipe first !
    </h1>
  `,
  styles: []
})
export class RecipeStartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
