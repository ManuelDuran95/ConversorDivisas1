import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcercaRoutingModule } from './acerca-routing.module';
import {AcercaComponent} from './acerca.component';

@NgModule({
  declarations: [AcercaComponent],
  imports: [
    CommonModule,
    AcercaRoutingModule
  ]
})
export class AcercaModule { }
