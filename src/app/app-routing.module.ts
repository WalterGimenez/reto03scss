import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactoReactivoComponent } from "./contacto-reactivo/contacto-reactivo.component";
import { ContactoComponent } from "./contacto/contacto.component";
import { PermissionsGuard } from "./guards/permissions.guard";
import { WhithoutSaveGuard } from "./guards/whithout-save.guard";
import { HomeComponent } from "./home/home.component";
import { PaginaNoEncontradaComponent } from "./pagina-no-encontrada/pagina-no-encontrada.component";
import { DataResolverService } from "./resolver/data.resolver.service";
import { DetailsComponent } from "./users/details/details.component";
import { ListComponent } from "./users/list/list.component";
import { UserComponent } from "./users/user/user.component";

const routes : Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path:'contacto-reactivo', loadChildren: ()=> 
    import('./contacto-reactivo/contacto-reactivo.module').then(m => m.ContactoReactivoModule)
    },
    {path:'contacto-template/:id', component: ContactoComponent},
    {path: 'home', component: HomeComponent},
    {path: 'users', component: UserComponent, canActivate: [PermissionsGuard],
    children:[
        {path: 'list', component: ListComponent},
        {path: 'details', component: DetailsComponent}
    ]},
    {path: '**', component: PaginaNoEncontradaComponent}
]

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})

export class AppRoutingModule{ }