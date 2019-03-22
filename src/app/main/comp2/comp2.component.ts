import { Component, OnInit } from '@angular/core';
import { ServicioSubjectService } from 'src/app/servicio-subject.service';
import { UsuarioInterface } from '../model/UsuarioInterface';
import { UsuarioClass } from '../model/UsuarioClass';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.sass']
})
export class Comp2Component implements OnInit {
  public arrayUsuarios:Array<UsuarioClass>=new Array;

  constructor(private servicio:ServicioSubjectService) { }

  ngOnInit() {
    this.escucharSubject();
  
  }

 
  escucharSubject():void{
    this.servicio.getSubject().subscribe((data:UsuarioClass)=>{
      if(data != null){
        console.log("COMP 2" ,data)
        this.arrayUsuarios.push(data);
      }
    })
  }

}
