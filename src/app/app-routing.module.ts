import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradoresComponent } from './paginas/administradores/administradores.component';
import { HomeComponent } from './paginas/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'administradores', component: AdministradoresComponent }
  // { path: '**', redirectTo: /not-found  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
