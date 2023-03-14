import { Component, OnInit } from '@angular/core';
import { Alarm } from '../alarm';
import { AlarmFormComponent } from '../alarm-form/alarm-form.component';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-alarms-list',
  templateUrl: './alarms-list.component.html',
  styleUrls: ['./alarms-list.component.css']
})
export class AlarmsListComponent implements OnInit {


  alarmsList: Alarm[] = [new Alarm(11, 22, "Despertador", "barcode", "Pedro", "LM JV  "), new Alarm(9, 0, "Fines de semana", "camera", null, "     SD"), new Alarm(21, 30, "Medicina", "touch", null, "L M V  "), new Alarm(3, 0, "Madrugar", "nfc", null, "  M    ")]
  dialogConfig = new MatDialogConfig();
  modalDialog: MatDialogRef<AlarmFormComponent, any> | undefined;

  constructor(public matDialog: MatDialog) { }

  ngOnInit(): void { }

  openModal() {
    this.dialogConfig.id = "alarm-modal-component";
    this.dialogConfig.height = "90%";
    this.dialogConfig.width = "40%";
    this.modalDialog = this.matDialog.open(AlarmFormComponent, this.dialogConfig);
  }

  openAlarmModal(alarm: Alarm) {
    this.dialogConfig.id = "alarm-modal-component";
    this.dialogConfig.height = "90%";
    this.dialogConfig.width = "40%";
    this.modalDialog = this.matDialog.open(AlarmFormComponent, this.dialogConfig);

    this.modalDialog.componentInstance.alarm = alarm;
  }
}
