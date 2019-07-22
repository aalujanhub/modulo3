import { Component, OnInit } from '@angular/core';
import {ServicioService} from '../servicios/servicio.service';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.css']
})
export class UnoComponent implements OnInit {
//private autor:string;
public data:object;
//private author: string;
//private quote:string;

  constructor(private srv: ServicioService) { };

  ngOnInit() {
    return this.getDetalle();
  }
  getDetalle()
  {
    return this.srv.getDatos().subscribe(informacion =>
       {
        // this.author =informacion.author;
        // this.quote=informacion.quote;
         this.data=informacion.author;
         this.data=informacion.quote;
      return informacion;
     } );
    
  }
}
