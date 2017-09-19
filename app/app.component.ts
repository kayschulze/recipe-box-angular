import { Component } from '@angular/core';
import { Recipe } from './recipe';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
     <h1>Recipe Box</h1>

     <ul>
       <div class='well' *ngFor="let recipe of recipes" [class.selected] = "recipe === selectedRecipe"(click) = "onSelect(recipe)">
       <h3>Recipe Name: {{recipe.title}}</h3>

       </div>
     </ul>

     <div *ngIf="selectedRecipe">
       <h1>{{selectedRecipe.title}}</h1>
       <ul><li *ngFor="let ingredient of selectedRecipe.ingredients">{{ingredient}}</li></ul>
       <p>{{selectedRecipe.directions}}</p>

       <button (click) = "hide()">Hide Recipe</button>
     </div>
   </div>
  `
})

export class AppComponent {
  selectedRecipe : Recipe;
  recipes: Recipe[] = [
    new Recipe('peanut butter & jelly', ['peanutbutter', 'jelly', 'bread'], 'Spread peanutbutter on one side of the bread.  Spread jelly on one side of the other piece of bread.  Put jelly side and peanutbutter side together.'),
    new Recipe('Parfait', ['yogurt', 'granola', 'fresh fruit'], 'Combine all ingredients in a cup.  Mix if desired.  Enjoy.'),
  ];

  onSelect(recipe:Recipe): void {
    this.selectedRecipe = recipe;
  }

  hide(): void {
    this.selectedRecipe = null;
  }
}
