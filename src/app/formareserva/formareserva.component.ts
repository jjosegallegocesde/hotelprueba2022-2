import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formareserva',
  templateUrl: './formareserva.component.html',
  styleUrls: ['./formareserva.component.css']
})
export class FormareservaComponent  implements OnInit{

  formulario!:FormGroup;

  constructor(public fabricaFormulario:FormBuilder) { 

    this.formulario=this.initFormulario();

  }


  public analizarFormulario():void{
    let datos=this.formulario.value;
  }


  ngOnInit(): void {
    
  }
  

  public initFormulario():FormGroup{

    return this.fabricaFormulario.group({

      entrada:['',[Validators.required]],
      salida:['',[Validators.required]],
      adultos:['1',[Validators.required]],
      ninos:['1',[Validators.required]]
      

    })


    
  }

}
