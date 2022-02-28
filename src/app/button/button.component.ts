import { Component, Input, OnChanges, OnDestroy, OnInit,  SimpleChanges, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button [ngStyle] = "{'background-color': color}" >{{label}}</button>
  <p>{{ counterRender() }}</p>`,
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnChanges, OnInit, OnDestroy  {
  @Input() color!: String;
  @Input() label!: String;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes ->', changes);
  }

  ngOnInit(): void {
    console.log('OnInit -> ');
  }
  
  ngOnDestroy(): void {
    console.log('Destroy');
  }
  counterRender(): boolean{
    console.log("Render Button");
    return true;
  }
}
