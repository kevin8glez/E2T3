import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'hasiera',
        loadChildren: () => import('../hasiera/hasiera-routing.module').then(m => m.HasieraPageRoutingModule)
      },
      {
        path: 'zerbitzuak',
        loadChildren: () => import('../zerbitzuak/zerbitzuak-routing.module').then(m => m.ZerbitzuakPageRoutingModule)
      },
      {
        path: 'hitzorduak',
        loadChildren: () => import('../hitzorduak/hitzorduak-routing.module').then(m => m.HitzorduakPageRoutingModule)
      },
      {
        path: 'langileak',
        loadChildren: () => import('../langileak/langileak-routing.module').then(m => m.LangileakPageRoutingModule)
      },
      {
        path: 'kontaktua',
        loadChildren: () => import('../kontaktua/kontaktua-routing.module').then(m => m.KontaktuaPageRoutingModule)
      },
      {
        path: '',
        redirectTo: 'hasiera',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}