import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
     <h1>Recipe Box</h1>

     <ul>
       <div class='well' *ngFor="let recipe of recipes">
       <h3>Recipe Name: {{recipe.title}}</h3>
       <ul><li *ngFor="let ingredient of recipe.ingredients">{{ingredient}}</li></ul>
       <p>{{recipe.directions}}</p>
       <br>
       </div>
     </ul>
   </div>
  `
})

export class AppComponent {

  recipes: Recipe[] = [
    new Recipe('peanut butter & jelly', ['peanutbutter', 'jelly', 'bread'], 'Spread peanutbutter on one side of the bread.  Spread jelly on one side of the other piece of bread.  Put jelly side and peanutbutter side together.'),
    new Recipe('Parfait', ['yogurt', 'granola', 'fresh fruit'], 'Combine all ingredients in a cup.  Mix if desired.  Enjoy.'),
  ];
}

export class Recipe {
  constructor(public title: string, public ingredients: string [], public directions: string) { }
}
