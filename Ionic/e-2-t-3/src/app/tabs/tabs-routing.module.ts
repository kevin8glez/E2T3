import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'bezeroak',
        loadChildren: () => import('../bezeroak/bezeroak.module').then(m => m.BezeroakPageModule)
      },
      {
        path: 'zerbitzuak',
        loadChildren: () => import('../zerbitzuak/zerbitzuak.module').then(m => m.ZerbitzuakPageModule)
      },
      {
        path: 'hitzorduak',
        loadChildren: () => import('../hitzorduak/hitzorduak.module').then(m => m.HitzorduakPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/bezeroak',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/bezeroak',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
