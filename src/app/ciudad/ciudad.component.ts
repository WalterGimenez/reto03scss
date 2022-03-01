import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-ciudad',
  template: `   <li (click)="ciudadClick(ciudad)" [ngClass]="{'alert alert-info': ciudad === seleccion,            'noseleccionado': ciudad === noseleccion }">{{ciudad | titlecase}}
                </li>`,
  styleUrls: ['./ciudad.component.scss'],
  
})
export class CiudadComponent {

  @Input() ciudad!: string;
  @Input() seleccion!:string;
  @Input() noseleccion!: string;
  @Output() ciudadClikEvento = new EventEmitter<string>();

  ciudadClick(ciudad: string):void{
    this.ciudadClikEvento.emit(ciudad);
  }
  
}
