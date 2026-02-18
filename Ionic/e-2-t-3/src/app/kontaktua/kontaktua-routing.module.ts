import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KontaktuaPage } from './kontaktua.page';

const routes: Routes = [
  {
    path: '',
    component: KontaktuaPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KontaktuaPageRoutingModule {}