import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NatgeoRoutingModule } from './natgeo-routing.module';
import { NatgeoComponent } from './natgeo.component';


@NgModule({
  declarations: [NatgeoComponent],
  imports: [
    CommonModule,
    NatgeoRoutingModule
  ]
})
export class NatgeoModule { }
