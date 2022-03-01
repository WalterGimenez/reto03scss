import { Component, OnInit } from '@angular/core';
interface ContactForm
{
  "name": string;
  "mayorEdad": boolean;
  "departamento": string;
  "comment": string
}
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  
  datos = {
    name: "",
    mayorEdad: false,
    departamento: "",
    comment: ""
  };

  constructor() { }

  ngOnInit(): void {
  }

  presiono(values : any): void {
    console.log("Form values", values );
  }
}
