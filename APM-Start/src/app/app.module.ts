import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { FormsModule } from '@angular/forms';
import { ConverToSpacesPipe } from './products/convert-to-spaces.pipe';

@NgModule({
  declarations: [
    AppComponent, ProductListComponent, ConverToSpacesPipe
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  bootstrap: [AppComponent, ProductListComponent]
})
export class AppModule { }
