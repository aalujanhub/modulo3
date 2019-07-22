import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
 // providedIn: 'root'   debe apuntar a la pag princiapl

export class ServicioService {
 private url: string;
   

  constructor(private http: HttpClient) {
  this.url="http://quotes.stormconsultancy.co.uk/random.json";

   }

   getDatos(): Observable<any> {
     return this.http.get(this.url);
   }


}
