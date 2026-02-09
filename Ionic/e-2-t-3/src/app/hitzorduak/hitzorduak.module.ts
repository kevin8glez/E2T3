import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HitzorduakPage } from './hitzorduak.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { HitzorduakPageRoutingModule } from './hitzorduak-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    HitzorduakPageRoutingModule
  ],
  declarations: [HitzorduakPage]
})
export class HitzorduakPageModule {}
