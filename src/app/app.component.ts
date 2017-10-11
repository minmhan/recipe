import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyDZOvvgcw5ktxb6eo9lksqSmL75VfYBciM",
      authDomain: "ng-recipe-322e0.firebaseapp.com"
    });
  }

  loadedFeature = 'recipe';
  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
