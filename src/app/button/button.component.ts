import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button [ngStyle] = "{'background-color': color}" >{{label}}</button>`,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() color!: String;
  @Input() label!: String;

  constructor() { }

  ngOnInit(): void {
  }

}
