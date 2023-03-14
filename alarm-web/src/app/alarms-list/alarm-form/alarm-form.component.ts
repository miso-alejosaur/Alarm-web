import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { Alarm } from '../alarm';
import { ContacSelectorComponent } from '../contac-selector/contac-selector.component';
import { MethodSelectorComponent } from '../method-selector/method-selector.component';

@Component({
  selector: 'app-alarm-form',
  templateUrl: './alarm-form.component.html',
  styleUrls: ['./alarm-form.component.css'],
})
export class AlarmFormComponent implements OnInit {
  dialogConfig = new MatDialogConfig();
  modalDialog: MatDialogRef<MethodSelectorComponent, any> | undefined;
  modalDialog2: MatDialogRef<ContacSelectorComponent, any> | undefined;
  alarm: Alarm;

  constructor(public matDialog: MatDialog) {
    this.alarm = new Alarm(-1, -1, "", "", "", "       ");
  }

  ngOnInit(): void {}

  openCameraModal() {
    this.dialogConfig.id = 'photo-modal-component';
    this.dialogConfig.height = '50%';
    this.dialogConfig.width = '50%';
    this.modalDialog = this.matDialog.open(
      MethodSelectorComponent,
      this.dialogConfig
    );

    this.modalDialog.componentInstance.title =
      'Seleccione foto de desactivación';
    this.modalDialog.componentInstance.elements = {
      Sala: '../../../assets/method-photos/sala.jpg',
      Baño: '../../../assets/method-photos/bathroom.avif',
      Patio: '../../../assets/method-photos/patio.jpg',
    };

    this.alarm.strategy = "camera";
  }

  openBarcodeModal() {
    this.dialogConfig.id = 'barcode-modal-component';
    this.dialogConfig.height = '50%';
    this.dialogConfig.width = '50%';
    this.modalDialog = this.matDialog.open(
      MethodSelectorComponent,
      this.dialogConfig
    );

    this.modalDialog.componentInstance.title =
      'Seleccione código de desactivación';
    this.modalDialog.componentInstance.elements = {
      Libro: '../../../assets/method-photos/book.jpeg',
      Shampoo: '../../../assets/method-photos/shampoo.jpg',
      Vino: '../../../assets/method-photos/vino.jpg',
    };

    this.alarm.strategy = "barcode";
  }

  openNfcModal() {
    this.dialogConfig.id = 'nfc-modal-component';
    this.dialogConfig.height = '50%';
    this.dialogConfig.width = '50%';
    this.modalDialog = this.matDialog.open(
      MethodSelectorComponent,
      this.dialogConfig
    );

    this.modalDialog.componentInstance.title =
      'Seleccione NFC de desactivación';
    this.modalDialog.componentInstance.elements = {
      'Tarjeta SITP': '../../../assets/iconos-apagado/nfc.png',
      'Pin NFT Sala': '../../../assets/iconos-apagado/nfc.png',
      'Pin NFT Cocina': '../../../assets/iconos-apagado/nfc.png',
    };

    this.alarm.strategy = "nfc";
  }

  openTouchModal() {
    this.alarm.strategy = "touch";
  }

  openContactModal() {
    this.dialogConfig.id = 'contact-modal-component';
    this.dialogConfig.height = '50%';
    this.dialogConfig.width = '50%';
    this.modalDialog2 = this.matDialog.open(
      ContacSelectorComponent,
      this.dialogConfig
    );
  }
}
