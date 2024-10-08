import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformesPageRoutingModule } from './informes-routing.module';

import { InformesPage } from './informes.page';

import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformesPageRoutingModule,
    MatProgressBarModule
  ],
  declarations: [InformesPage]
})
export class InformesPageModule {}
