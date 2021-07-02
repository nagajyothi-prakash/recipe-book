import { EventEmitter } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model'

export class ShoppingListService {
    ingredientChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Bananas', 10),
      ];
    
    getIngredients () {
        return this.ingredients.slice();
    }

    addIngredient (ingredient: Ingredient) {
      this.ingredients.push(ingredient);
      this.ingredientChanged.emit(this.ingredients.slice())
    }

    addIngredients (ingredientsReceived: Ingredient[]){
        this.ingredients.push(...ingredientsReceived);
        this.ingredientChanged.emit(this.ingredients.slice());
    }
}