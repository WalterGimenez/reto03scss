import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactoReactivoComponent } from "./contacto-reactivo/contacto-reactivo.component";
import { ContactoComponent } from "./contacto/contacto.component";
import { HomeComponent } from "./home/home.component";

const routes : Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path:'contacto-reactivo', component: ContactoReactivoComponent},
    {path:'contacto-template', component: ContactoComponent},
    {path: 'home', component: HomeComponent}
]

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})

export class AppRoutingModule{ }