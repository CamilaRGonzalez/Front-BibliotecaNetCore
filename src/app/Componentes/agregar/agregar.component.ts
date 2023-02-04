import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Libro, ServicioService } from 'src/app/Service/servicio.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  libro: Libro = {id:"",nombre:"",autor:"",editorial:"",ejemplaresDisponibles:""};
  
  constructor(private servicio:ServicioService,private router:Router){}

  ngOnInit(): void {
      
  }

  agregarLibro(){
    this.libro.id = "0";
    this.servicio.saveLibro(this.libro).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/inicio']);
      },
      err => console.log(err)
    );
  }

}
