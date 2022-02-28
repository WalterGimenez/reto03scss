import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormNewItemComponent {
  @Input() nombreClase!: String;
  @Input() etiqueta!: String;

  @Output() nuevoItemEvento = new EventEmitter<string>();

  agregarNuevo(item: string): void{
    console.log("item ->", item);
    this.nuevoItemEvento.emit(item);
  }
  counterRender(): boolean{
    console.log("Render Form");
    return true;
  }
}
