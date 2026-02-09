import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LangileakPage } from './langileak.page';

const routes: Routes = [
  {
    path: '',
    component: LangileakPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LangileakPageRoutingModule {}
