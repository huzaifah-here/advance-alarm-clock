import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetAlarmPageRoutingModule } from './set-alarm-routing.module';

import { SetAlarmPage } from './set-alarm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetAlarmPageRoutingModule
  ],
  declarations: [SetAlarmPage]
})
export class SetAlarmPageModule {}
