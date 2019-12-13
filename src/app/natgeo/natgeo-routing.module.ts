import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NatgeoComponent } from './natgeo.component';


const routes: Routes = [{
  path: '',
  component: NatgeoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NatgeoRoutingModule { }
