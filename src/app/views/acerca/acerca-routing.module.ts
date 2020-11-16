import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AcercaComponent} from './acerca.component';

const routes: Routes = [
  {
    path: '',
    component: AcercaComponent,
    data: {
      title: 'acerca'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcercaRoutingModule { }
