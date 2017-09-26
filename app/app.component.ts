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
       <div *ngFor="let recipe of allRecipes" [class]="difficultyColor(recipe)" [class.selected] = "recipe === selectedRecipe"(click) = "onSelect(recipe)">
         <h3>{{recipe.title}}</h3>
       </div>
     </ul>
       <recipe-details [recipe] = "selectedRecipe" [teacher] = "word"></recipe-details>
    </div>
  `
})

export class AppComponent {
  word = 'Kim\'s recipe';
  selectedRecipe: Recipe;
  allRecipes  =  recipeManager.allRecipes;

  onSelect(recipe:Recipe): void {
  //console.log(this.allRecipes);
    this.selectedRecipe = recipe;
  }

  difficultyColor(currentRecipe) {
    if (currentRecipe.difficulty === 3) {
      return "well difficultly3";
    }
    else if (currentRecipe.difficulty == 2) {
      return "well difficultly2";
    }
    else {
      return "well difficultly1";
    }
  }
}
