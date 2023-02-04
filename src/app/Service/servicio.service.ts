import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  url = "https://localhost:44357/api/Libro";
  constructor(private http: HttpClient) { }

  getLibros():Observable<any>{    
    return this.http.get(this.url);
  }

  getLibro(id: string): Observable<any>{
    return this.http.get(this.url + '/'+ id);
  }

  saveLibro(libro: Libro):Observable<any>{
    return this.http.post(this.url,libro);
  }

  editLibro(id: string,libro: Libro):Observable<any>{
    return this.http.put(this.url+'/'+ id,libro);
  }

  deleteLibro(id: string):Observable<any>{
    return this.http.delete(this.url+'/'+id);
  }
}

export interface Libro{
  id: string;
  nombre: string;
  autor: string;
  editorial: string;
  ejemplaresDisponibles: string;
}
