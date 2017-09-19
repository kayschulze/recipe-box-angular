import { Component } from '@angular/core';
import { Recipe } from './recipe';
import { RecipeManager } from './recipe-manager';

let recipeManager : RecipeManager = new RecipeManager;
recipeManager.populateRecipes();

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
     <h1>Recipe Box</h1>

     <ul>
       <div class='well' *ngFor="let recipe of allRecipes" [class.selected] = "recipe === selectedRecipe"(click) = "onSelect(recipe)">
       <h3>Recipe Name: {{recipe.title}}</h3>

       </div>
     </ul>

     <div *ngIf="selectedRecipe">
       <recipe-details [recipe] = "selectedRecipe" [word]="word"></recipe-details>

     </div>

   </div>
  `
})

//

export class AppComponent {
  word = 'hello';
  selectedRecipe: Recipe;
  allRecipes  =  recipeManager.allRecipes;

  onSelect(recipe:Recipe): void {
  //console.log(this.allRecipes);
    this.selectedRecipe = recipe;
  }

}
