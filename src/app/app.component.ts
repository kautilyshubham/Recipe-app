import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  selected;
  onselected(who: string){
    this.selected=who;
  };

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyBYRHRVTxb72UPd_ZoIM3Eb6W7Q0iAoA1E",
      authDomain: "recipe-e5a9e.firebaseapp.com",
    })
  }
}
