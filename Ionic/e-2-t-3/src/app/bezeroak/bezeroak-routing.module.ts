import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BezeroakPage } from './bezeroak.page';

const routes: Routes = [
  {
    path: '',
    component: BezeroakPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BezeroakPageRoutingModule {}
