import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AppComponent } from './app.component';
import { HilightComponent } from './hilight.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, AutoCompleteModule ],
  declarations: [ AppComponent, HilightComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
