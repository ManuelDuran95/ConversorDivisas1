import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{AyudaComponent} from './ayuda.component';


const routes: Routes = [{
  path: '',
  component: AyudaComponent,
  data: {
    title: 'Ayuda'
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AyudaRoutingModule { }
