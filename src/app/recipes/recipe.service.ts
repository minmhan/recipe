import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            'A test recipe', 
            'A test', 
            'https://upload.wikimedia.org/wikipedia/commons/f/f5/Handi-chicken-recipe.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Sugar', 11)
            ]
        ),
        new Recipe(
            'A test recipe 2', 
            'A test', 
            'https://upload.wikimedia.org/wikipedia/commons/f/f5/Handi-chicken-recipe.jpg',
            [
                new Ingredient('Rice', 5),
                new Ingredient('Milk', 5),
                new Ingredient('Salt', 1)
            ]
        )
      ];

    constructor(private slService: ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToRecipeService(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}