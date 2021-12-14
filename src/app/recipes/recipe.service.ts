import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

  private  recipes: Recipe[] = [
        new Recipe ('A Test Recipe', 
        'This is simply a test','https://www.maxpixel.net/static/photo/1x/Food-Recipe-Kitchen-Home-Made-Breakfast-Vegetables-4977901.jpg',
        [
            new Ingredient ('Meat', 1),
            new Ingredient('French Fries', 10)

        ] ),
    
        new Recipe ('Another Test Recipe', 'This is simply a test','https://p1.pxfuel.com/preview/400/456/943/dishes-kitchen-bio-food.jpg', [
            new Ingredient ('Lettuce', 1),
            new Ingredient('Sprouts', 2)
        ] )
      ];

      constructor(private slService: ShoppingListService) {}

      getRecipes() {
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
          this.slService.addIngredients(ingredients);
      }

}