import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Libro, ServicioService } from 'src/app/Service/servicio.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  id:string = '';
  libro: Libro = {id:"",nombre:"",autor:"",editorial:"",ejemplaresDisponibles:""};

  constructor(private servicio: ServicioService,
    private activatedroute:ActivatedRoute,
    private router:Router){}

  ngOnInit(): void {
      this.id = this.activatedroute.snapshot.params["id"]; //obtiene el parametro id de la url
      this.obtenerLibro(); //obtiene de la base de datos el libro corresoindiente al id
  }

  obtenerLibro(){
    this.servicio.getLibro(this.id).subscribe(
      res => this.libro = res,
      err => console.log(err)
      );
  }

  editarLibro(){
    this.servicio.editLibro(this.id,this.libro).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/inicio']);
      },
      err => console.log(err)
    );
  }
}
