import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto-reactivo',
  templateUrl: './contacto-reactivo.component.html',
  styleUrls: ['./contacto-reactivo.component.scss']
})
export class ContactoReactivoComponent implements OnInit {
  contactForm!: FormGroup;
  

  constructor(private readonly fb:FormBuilder) { }

  ngOnInit(): void {
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