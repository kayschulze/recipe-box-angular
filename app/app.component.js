"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var recipe_1 = require("./recipe");
var AppComponent = (function () {
    function AppComponent() {
        this.recipes = [
            new recipe_1.Recipe('peanut butter & jelly', ['peanutbutter', 'jelly', 'bread'], 'Spread peanutbutter on one side of the bread.  Spread jelly on one side of the other piece of bread.  Put jelly side and peanutbutter side together.'),
            new recipe_1.Recipe('Parfait', ['yogurt', 'granola', 'fresh fruit'], 'Combine all ingredients in a cup.  Mix if desired.  Enjoy.'),
        ];
    }
    AppComponent.prototype.onSelect = function (recipe) {
        this.selectedRecipe = recipe;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: "\n    <div class=\"container\">\n     <h1>Recipe Box</h1>\n\n     <ul>\n       <div class='well' *ngFor=\"let recipe of recipes\" [class.selected] = \"recipe === selectedRecipe\"(click) = \"onSelect(recipe)\">\n       <h3>Recipe Name: {{recipe.title}}</h3>\n\n       </div>\n     </ul>\n\n     <div *ngIf=\"selectedRecipe\">\n       <h1>{{selectedRecipe.title}}</h1>\n       <ul><li *ngFor=\"let ingredient of selectedRecipe.ingredients\">{{ingredient}}</li></ul>\n       <p>{{selectedRecipe.directions}}</p>\n     </div>\n   </div>\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map