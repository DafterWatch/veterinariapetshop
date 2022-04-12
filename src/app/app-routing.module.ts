import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearproductoComponent } from './components/crearproducto/crearproducto.component';
import { EditarproductoComponent } from './components/editarproducto/editarproducto.component';
import { LoginComponent } from './components/login/login.component';
import { MenuproductosComponent } from './components/menuproductos/menuproductos.component';
import { PagprincipalComponent } from './components/pagprincipal/pagprincipal.component';

const routes: Routes = [
  { path: '', redirectTo: 'menuproductos', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'pagprincipal', component: PagprincipalComponent },
  { path: 'menuproductos', component: MenuproductosComponent },
  { path: 'crearproducto', component: CrearproductoComponent },
  { path: 'editarproducto/:id', component: EditarproductoComponent },
  { path: '**', redirectTo: 'menuproductos', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
