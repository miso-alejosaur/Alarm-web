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


  alarmsList: Alarm[] = [new Alarm(11, 22, "Despertador", "barcode", null, "LM JV  "), new Alarm(11, 22, "Despertador", "camera", null, "LM JV  "), new Alarm(11, 22, "Despertador", "touch", null, "LM JV  "), new Alarm(11, 22, "Despertador", "nfc", null, "LM JV  ")]
  dialogConfig = new MatDialogConfig();
  modalDialog: MatDialogRef<AlarmFormComponent, any> | undefined;

  constructor(public matDialog: MatDialog) { }

  ngOnInit(): void {
  }


  openModal() {
    this.dialogConfig.id = "alarm-modal-component";
    this.dialogConfig.height = "90%";
    this.dialogConfig.width = "40%";
    this.modalDialog = this.matDialog.open(AlarmFormComponent, this.dialogConfig);
  }
}
