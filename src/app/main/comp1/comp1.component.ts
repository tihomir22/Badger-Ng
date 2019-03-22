import { Component, OnInit } from '@angular/core';
import { ServicioSubjectService } from 'src/app/servicio-subject.service';
import { UsuarioInterface } from '../model/UsuarioInterface';
import { HttpErrorResponse } from '@angular/common/http';
import { UsuarioClass } from '../model/UsuarioClass';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.sass']
})
export class Comp1Component implements OnInit {
  public arrayUsuarios:Array<UsuarioClass>=new Array;
  
  constructor(private servicio:ServicioSubjectService) { }

  ngOnInit() {
    this.escucharSubject();
    
  }

 
  private escucharSubject():void{
    this.servicio.getSubject().subscribe((data:UsuarioClass)=>{
      if(data != null){
        console.log("COMP 1" ,data)
        this.arrayUsuarios.push(data);        
      }
    })
  }

}
