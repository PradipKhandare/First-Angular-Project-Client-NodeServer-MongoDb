import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MarvellousService {



  constructor(private Http : HttpClient) { }

  getBatches(): Observable<any>
  {
    return this.Http.get( "http://localhost:5100/getBatches");
  }
}
