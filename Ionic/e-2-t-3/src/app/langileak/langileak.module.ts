import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LangileakPageRoutingModule } from './langileak-routing.module';

import { LangileakPage } from './langileak.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LangileakPageRoutingModule
  ],
  declarations: [LangileakPage]
})
export class LangileakPageModule {}
