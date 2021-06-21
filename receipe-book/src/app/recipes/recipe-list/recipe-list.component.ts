import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'These are the test instructions', 
    'https://uploads-ssl.webflow.com/5fc0111b3117034aa1c598d5/5fd204df0da2c0ab750162a1_applesauce%20muffins.jpg'),
    new Recipe('A test recipe', 'These are the test instructions', 
    'https://uploads-ssl.webflow.com/5fc0111b3117034aa1c598d5/5fd204df0da2c0ab750162a1_applesauce%20muffins.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  recipeSelector(recipe: Recipe) {
    console.log(recipe)
     this.recipeWasSelected.emit(recipe)
  } 

}
