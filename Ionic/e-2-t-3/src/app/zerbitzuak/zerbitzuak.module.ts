import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ZerbitzuakPage } from './zerbitzuak.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ZerbitzuakPageRoutingModule } from './zerbitzuak-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ZerbitzuakPageRoutingModule
  ],
  declarations: [ZerbitzuakPage]
})
export class ZerbitzuakPageModule {}
