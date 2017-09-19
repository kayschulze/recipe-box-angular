"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.recipes = [
            new Recipe('peanut butter & jelly', ['peanutbutter', 'jelly', 'bread'], 'Spread peanutbutter on one side of the bread.  Spread jelly on one side of the other piece of bread.  Put jelly side and peanutbutter side together.'),
            new Recipe('Parfait', ['yogurt', 'granola', 'fresh fruit'], 'Combine all ingredients in a cup.  Mix if desired.  Enjoy.'),
        ];
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: "\n    <div class=\"container\">\n     <h1>Recipe Box</h1>\n\n     <ul>\n       <div class='well' *ngFor=\"let recipe of recipes\">\n       <h3>Recipe Name: {{recipe.title}}</h3>\n       <ul><li *ngFor=\"let ingredient of recipe.ingredients\">{{ingredient}}</li></ul>\n       <p>{{recipe.directions}}</p>\n       <br>\n       </div>\n     </ul>\n   </div>\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
var Recipe = (function () {
    function Recipe(title, ingredients, directions) {
        this.title = title;
        this.ingredients = ingredients;
        this.directions = directions;
    }
    return Recipe;
}());
exports.Recipe = Recipe;
//# sourceMappingURL=app.component.js.map