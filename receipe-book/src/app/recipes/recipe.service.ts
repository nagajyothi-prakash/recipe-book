import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model'

@Injectable()
export class RecipeService {
   recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
          'Blueberry muffins',
          'Delicious, tasty, healthy muffins', 
          'https://uploads-ssl.webflow.com/5fc0111b3117034aa1c598d5/5fd204df0da2c0ab750162a1_applesauce%20muffins.jpg',
          [
            new Ingredient('Blueberry', 10),
            new Ingredient('Flour', 5),
            new Ingredient('Butter', 20),
            new Ingredient('Eggs', 10),
            new Ingredient('Baking soda', 5)
          ]),
        new Recipe(
          'Onion Rings', 
          'Delicious rings for cravings!!!', 
          'https://www.maxpixel.net/static/photo/1x/Onion-Rings-Bowl-American-Brown-Fried-Crunchy-5466250.jpg',
          [
            new Ingredient('Onion', 5),
            new Ingredient('All purpose flour', 10),
            new Ingredient('Spice', 7)
          ]
        )
      ];

    constructor(private shoppingService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientstoShoppingList (ingredients: Ingredient[]) {
      this.shoppingService.addIngredients(ingredients);
    }
}