import { Component, OnInit } from '@angular/core';
import { ServicioSubjectService } from 'src/app/servicio-subject.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-btnclick',
  templateUrl: './btnclick.component.html',
  styleUrls: ['./btnclick.component.sass']
})
export class BtnclickComponent implements OnInit {
  public subject$:BehaviorSubject<any>;
  constructor(private service:ServicioSubjectService) { }

  ngOnInit() {
    this.subject$=this.service.getSubject();
  }
  public enviarRandomATodos():void{
    let random:number=Math.floor(Math.random()*10000);
    this.subject$.next(random);
  }



}
