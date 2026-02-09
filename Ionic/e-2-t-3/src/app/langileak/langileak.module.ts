import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LangileakPage } from './langileak.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { LangileakPageRoutingModule } from './langileak-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    LangileakPageRoutingModule
  ],
  declarations: [LangileakPage]
})
export class LangileakPageModule {}
