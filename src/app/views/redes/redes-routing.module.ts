import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RedesComponent } from './redes.component'


const routes: Routes = [{
  path: '',
  component: RedesComponent,
  data: {
    title: 'Redes Sociales'
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RedesRoutingModule { }
