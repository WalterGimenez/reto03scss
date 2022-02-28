import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-ciudad',
  template: `
                <li (click)="ciudadClick(ciudad)" [ngClass]="{'alert alert-info': ciudad === seleccion, 'noseleccionado': ciudad === noseleccion }">{{ciudad}}</li>
            <p>Contador: {{ counterRender() }}</p>`,
  styleUrls: ['./ciudad.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CiudadComponent {

  @Input() ciudad!: string;
  @Input() seleccion!:string;
  @Input() noseleccion!: string;
  @Output() ciudadClikEvento = new EventEmitter<string>();

  ciudadClick(ciudad: string):void{
    this.ciudadClikEvento.emit(ciudad);
  }
  counterRender(): boolean{
    console.log("Render Ciudades");
    return true;
  }
}
