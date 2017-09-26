import { Component, Input } from '@angular/core';
import { Recipe } from './recipe';

@Component({
  selector: 'recipe-details',
  template: `
  <div *ngIf="recipe">
  <third-component [text] = "teacher"></third-component>
  <h1><input [(ngModel)]="recipe.title"></h1>
  <h3>Difficulty: <input [(ngModel)]="recipe.difficulty"></h3>
  <ul><li *ngFor="let ingredient of recipe.ingredients; let index=index; trackBy:trackByFn"><input type="text" [(ngModel)]="recipe.ingredients[index]"></li></ul>
  <p><input [(ngModel)]="recipe.directions"></p>

  <button (click) ="hide()">Hide Recipe</button>

  </div>
  `
})

export class RecipeDetailsComponent{
  @Input() recipe: Recipe;
  @Input() teacher: string;

  trackByFn(index: any, item: any) {
    return index;
  }

  hide(): void {
    this.recipe = null;
    console.log(JSON.stringify(this.recipe));
  }
}
