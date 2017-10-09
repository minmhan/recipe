import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>()
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
    
    setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes[index];
    }

    addIngredientsToRecipeService(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index:number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}