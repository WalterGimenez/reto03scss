import { Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.scss'],
  
})
export class FormNewItemComponent {
  @Input() nombreClase!: String;
  @Input() etiqueta!: String;

  @Output() nuevoItemEvento = new EventEmitter<string>();

  agregarNuevo(item: string): void{
    console.log("item ->", item);
    this.nuevoItemEvento.emit(item);
  }
  
}
