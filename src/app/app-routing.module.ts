import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './Componentes/agregar/agregar.component';
import { EditarComponent } from './Componentes/editar/editar.component';
import { IndexComponent } from './Componentes/index/index.component';

const routes: Routes = [
  {path:'', redirectTo:"inicio", pathMatch:'full'},
  {path:'inicio', component:IndexComponent},
  {path:'editar/:id', component:EditarComponent},
  {path:'agregar', component:AgregarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
