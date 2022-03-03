import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
interface contactForm
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
  id!: string;

  datos = {
    name: "",
    mayorEdad: false,
    departamento: "",
    comment: ""
  };

  constructor(private readonly route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params["id"];
    })
  }

  presiono(values : any): void {
    console.log("Form values", values );
  }
}
