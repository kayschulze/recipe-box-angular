import { Recipe } from './recipe';

export class RecipeManager{
   allRecipes: Recipe[] = [];


  populateRecipes(){

    let recipe1:Recipe = new Recipe('peanut butter & jelly', ['peanutbutter', 'jelly', 'bread'], 'Spread peanutbutter on one side of the bread.  Spread jelly on one side of the other piece of bread.  Put jelly side and peanutbutter side together.');

    let recipe2: Recipe = new Recipe('Parfait', ['yogurt', 'granola', 'fresh fruit'], 'Combine all ingredients in a cup.  Mix if desired.  Enjoy.');

    let recipe3: Recipe = new Recipe('Mushroom burger', ['mushroom', 'buns', 'lettuce'], 'Make Burger. Enjoy.');

    this.allRecipes.push(recipe1,recipe2, recipe3);

  }

}
