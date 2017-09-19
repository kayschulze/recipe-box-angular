"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var recipe_manager_1 = require("./recipe-manager");
var recipeManager = new recipe_manager_1.RecipeManager;
recipeManager.populateRecipes();
var AppComponent = (function () {
    function AppComponent() {
        this.word = 'hello';
        this.allRecipes = recipeManager.allRecipes;
    }
    AppComponent.prototype.onSelect = function (recipe) {
        //console.log(this.allRecipes);
        this.selectedRecipe = recipe;
    };
    AppComponent.prototype.hide = function () {
        this.selectedRecipe = null;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: "\n    <div class=\"container\">\n     <h1>Recipe Box</h1>\n\n     <ul>\n       <div class='well' *ngFor=\"let recipe of allRecipes\" [class.selected] = \"recipe === selectedRecipe\"(click) = \"onSelect(recipe)\">\n       <h3>Recipe Name: {{recipe.title}}</h3>\n\n       </div>\n     </ul>\n\n     <div *ngIf=\"selectedRecipe\">\n       <recipe-details [recipe] = \"selectedRecipe\" [word]=\"word\"></recipe-details>\n\n     </div>\n\n   </div>\n  "
    })
    //
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map