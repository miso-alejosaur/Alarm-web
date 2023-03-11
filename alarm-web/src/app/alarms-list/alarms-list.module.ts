import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlarmsListComponent } from './alarms-list/alarms-list.component';
import { AlarmItemComponent } from './alarm-item/alarm-item.component';
import { AlarmFormComponent } from './alarm-form/alarm-form.component';
import {MatSliderModule} from '@angular/material/slider';


@NgModule({
  declarations: [
    AlarmsListComponent,
    AlarmItemComponent,
    AlarmFormComponent
  ],
  imports: [
    CommonModule,
    MatSliderModule
  ],
  exports: [AlarmItemComponent, AlarmsListComponent]
})
export class AlarmsListModule { }
