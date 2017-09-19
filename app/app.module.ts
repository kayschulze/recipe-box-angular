import { NgModule }     from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { RecipeDetailsComponent } from './recipe-details.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, RecipeDetailsComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
