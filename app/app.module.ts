import { NgModule }     from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { RecipeDetailsComponent } from './recipe-details.component';
import { ThirdComponent } from './third.component';
import { FormsModule }  from '@angular/forms';
@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, RecipeDetailsComponent, ThirdComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
