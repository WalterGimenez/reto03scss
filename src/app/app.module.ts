import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { FormNewItemComponent } from './form-new-item/form-new-item.component';
import { CiudadComponent } from './ciudad/ciudad.component';
import { FilterPipe} from './pipe/filter.pipe';
import { ContactoComponent } from './contacto/contacto.component';
import { ContactoReactivoComponent } from './contacto-reactivo/contacto-reactivo.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    FormNewItemComponent,
    CiudadComponent,
    FilterPipe,
    ContactoComponent,
    ContactoReactivoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
