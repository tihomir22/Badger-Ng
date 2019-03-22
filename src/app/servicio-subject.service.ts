import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject, interval, timer } from 'rxjs';
import { UsuarioInterface } from './main/model/UsuarioInterface';
import { map, flatMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ServicioSubjectService {
  public subject$:BehaviorSubject<UsuarioInterface>;
  private ids:number=0;

  constructor(private http:HttpClient) { 
    this.subject$ = new BehaviorSubject(null);
    this.startSubject();
  }

  getUsuario(num:number):Observable<any>{
    return this.http.get("http://localhost:3000/users/"+num);
  }

  public startSubject():void{

    const intervalo$=
    interval(1000).pipe(flatMap(()=>{
      return this.getUsuario(this.ids+=100)
    }))
    .subscribe((data:UsuarioInterface)=>{
      this.subject$.next(data)
    })
    
    //
    timer(9000).subscribe((final)=>{
      console.log("SERVICIO DESCONECTADO")
      intervalo$.unsubscribe();
    })
   

  }

  public getSubject():BehaviorSubject<any>{
    return this.subject$;
  }


}
