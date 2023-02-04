import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/Service/servicio.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{
  lista:any = [];

  constructor(private servicio: ServicioService){} 
 
  ngOnInit(): void {
      this.listarLibros();
  }

  listarLibros(){
    this.servicio.getLibros().subscribe(
      res => this.lista = res,
      err => console.log(err)
      );
    }

    eliminarLibro(id:string){
      this.servicio.deleteLibro(id).subscribe(
        res => this.ngOnInit(),
        err => console.log(err)
      );
    }
  }

