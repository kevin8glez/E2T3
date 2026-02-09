import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BezeroakPage } from './bezeroak.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { BezeroakPageRoutingModule } from './bezeroak-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    BezeroakPageRoutingModule
  ],
  declarations: [BezeroakPage]
})
export class BezeroakPageModule {}
