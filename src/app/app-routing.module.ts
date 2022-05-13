import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearproductoComponent } from './components/crearproducto/crearproducto.component';
import { EditarproductoComponent } from './components/editarproducto/editarproducto.component';
import { LoginComponent } from './components/login/login.component';
import { MenumascotasComponent } from './components/menumascotas/menumascotas.component';
import { MenuproductosComponent } from './components/menuproductos/menuproductos.component';
import { Menuproductos2Component } from './components/menuproductos2/menuproductos2.component';
import { MenusemevetComponent } from './components/menusemevet/menusemevet.component';
import { MenuusuariosComponent } from './components/menuusuarios/menuusuarios.component';
import { MenuvacunasComponent } from './components/menuvacunas/menuvacunas.component';
import { OlvidocontraComponent } from './components/olvidocontra/olvidocontra.component';
import { PagprincipalComponent } from './components/pagprincipal/pagprincipal.component';
import { RegistroproductosComponent } from './components/registroproductos/registroproductos.component';
import { PagprincipaladminComponent } from './pagprincipaladmin/pagprincipaladmin.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'pagprincipal', component: PagprincipalComponent },
  { path: 'pagprincipaladmin', component: PagprincipaladminComponent },
  { path: 'menuproductos', component: MenuproductosComponent },
  { path: 'menuproductos2', component: Menuproductos2Component },
  { path: 'menuusuarios', component: MenuusuariosComponent },
  { path: 'menumascotas', component: MenumascotasComponent },
  { path: 'menuvacunas', component: MenuvacunasComponent },
  { path: 'registroproductos', component: RegistroproductosComponent },
  { path: 'crearproducto', component: CrearproductoComponent },
  { path: 'editarproducto/:id', component: EditarproductoComponent },
  { path: 'editarsemevet', component: MenusemevetComponent },
  { path: 'olvidocontra', component: OlvidocontraComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
