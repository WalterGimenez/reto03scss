import { Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
  ciudades = ['Buenos Aires', 'Rosario', 'Misiones', 'Chaco'];
  name! : string;
  seleccion!: string;
  noseleccion! : string;
  criterio = "";

  title = 'Usando la misma api para todo';
  url = 'https://www.ecured.cu/images/thumb/5/57/Optimus_Prime.jpg/390px-Optimus_Prime.jpg';

  agregaCiudad(ciudad: string):void{
      this.ciudades.push(ciudad);
  }

  ciudadClick(ciudad: string): void{
      console.log('Ciudad ->', ciudad);
      this.seleccion = ciudad;
  }

  borraSeleccion(): void {
      this.seleccion = this.noseleccion;
  }
}
