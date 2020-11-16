import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RedesRoutingModule } from './redes-routing.module';
import {RedesComponent} from './redes.component';


@NgModule({
  declarations: [RedesComponent],
  imports: [
    CommonModule,
    RedesRoutingModule
  ]
})
export class RedesModule { }
