import { AuthService } from './../auth/auth.servise';
import { RecipeHttpService } from './../shered/recipeHttp.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output('selected') selection= new EventEmitter();

  constructor(private httpServeice: RecipeHttpService,
              public authService: AuthService) { }

  recipyselected(){
    this.selection.emit('recipy')
  }
  shoppingselected(){
    this.selection.emit('shopping')
  }

  onStoreData(){
    this.httpServeice.saveData().subscribe(
      (response)=>{
        console.log(response);
      }
    )
  }

  onFetchData(){
    this.httpServeice.getData(); 
    }
  ngOnInit() {
  }

}
