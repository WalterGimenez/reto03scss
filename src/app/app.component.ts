import { Component, OnChanges, OnDestroy, OnInit,  SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges, OnInit, OnDestroy {
  ciudades = ['Buenos Aires', 'Rosario', 'Misiones', 'Chaco'];
  name! : String;
  seleccion!: String;
  noseleccion! : String;
  

  title = 'Usando la misma api para todo';
  url = 'https://www.ecured.cu/images/thumb/5/57/Optimus_Prime.jpg/390px-Optimus_Prime.jpg';


  ngOnChanges(changes: SimpleChanges): void {
      console.log('Change ->', changes);
  }

  ngOnInit(): void{
      console.log('OnInit -> ');
  }

  ngOnDestroy(): void {
      console.log('Destroy');
  }

  ciudadClick(ciudad: String): void{
      console.log('Ciudad ->', ciudad);
      this.seleccion = ciudad;
  }

  borraSeleccion(): void {
      this.seleccion = this.noseleccion;
  }

}

