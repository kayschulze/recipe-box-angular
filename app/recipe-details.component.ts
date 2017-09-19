import { Component, Input } from '@angular/core';
import { Recipe } from './recipe';

@Component({
  selector: 'recipe-details',
  template: `
  <div *ngIf="recipe">
  <h1>{{recipe.title}}</h1>
  <ul><li *ngFor="let ingredient of recipe.ingredients">{{ingredient}}</li></ul>
  <p>{{recipe.directions}}</p>
  <p>{{word}}

  <button (click) ="hide()">Hide Recipe</button></div>
  `
})

export class RecipeDetailsComponent{
  @Input() recipe: Recipe;
  @Input() word: String;

  hide(): void {
    this.recipe = null;
  }
}
