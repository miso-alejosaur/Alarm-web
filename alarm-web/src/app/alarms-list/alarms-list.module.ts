import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlarmsListComponent } from './alarms-list/alarms-list.component';
import { AlarmItemComponent } from './alarm-item/alarm-item.component';
import { AlarmFormComponent } from './alarm-form/alarm-form.component';
import {MatSliderModule} from '@angular/material/slider';
import { DowSelectorComponent } from './dow-selector/dow-selector.component';
import { MethodSelectorComponent } from './method-selector/method-selector.component';
import { ContacSelectorComponent } from './contac-selector/contac-selector.component';


@NgModule({
  declarations: [
    AlarmsListComponent,
    AlarmItemComponent,
    AlarmFormComponent,
    DowSelectorComponent,
    MethodSelectorComponent,
    ContacSelectorComponent
  ],
  imports: [
    CommonModule,
    MatSliderModule
  ],
  exports: [AlarmItemComponent, AlarmsListComponent]
})
export class AlarmsListModule { }
