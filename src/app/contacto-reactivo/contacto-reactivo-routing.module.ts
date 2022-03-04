import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhithoutSaveGuard } from '../guards/whithout-save.guard';
import { DataResolverService } from '../resolver/data.resolver.service';
import { ContactoReactivoComponent } from './contacto-reactivo.component';

const routes: Routes = [
  {path:'',
    component: ContactoReactivoComponent,
    canDeactivate: [WhithoutSaveGuard],
    resolve:{departamento: DataResolverService}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactoReactivoRoutingModule { }
