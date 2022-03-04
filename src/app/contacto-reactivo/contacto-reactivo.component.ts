import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-contacto-reactivo',
  templateUrl: './contacto-reactivo.component.html',
  styleUrls: ['./contacto-reactivo.component.scss']
})
export class ContactoReactivoComponent implements OnInit {
  contactForm!: FormGroup;
  departamento: string [] = [];
  

  constructor(private readonly fb:FormBuilder,
     private readonly ruta: ActivatedRoute) { }

  name!: string;

  ngOnInit(): void {
    this.departamento = this.ruta.snapshot.data['departamento']

    this.ruta.queryParams.subscribe(
      (params: Params) =>{
        this.name = params["name"]
      }
    )
    this.contactForm = this.initForm();
    //this.onPathValue();
  }

  /*onPathValue(): void {
    this.contactForm.patchValue({name: "Juan"})
  }*/

  presiono(): void{
    console.log("Form ->", this.contactForm.value);
  }

  initForm(): FormGroup{
      return this.fb.group({
        name: ['', [Validators.required, Validators.minLength(4)]],
        mayorEdad: ['', [Validators.required]],
        departamento: [''],
        comentario: ['', [Validators.required, Validators.maxLength(300)]]
      });
  }
}
