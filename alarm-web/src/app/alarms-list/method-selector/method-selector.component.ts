import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-method-selector',
  templateUrl: './method-selector.component.html',
  styleUrls: ['./method-selector.component.css']
})
export class MethodSelectorComponent implements OnInit {

  public title: String;
  public elements: Object;

  constructor(public dialogRef: MatDialogRef<MethodSelectorComponent>) {
    this.title = "";
    this.elements = {};
  }

  ngOnInit(): void {
    console.log(this.title)
  }

  closeModal() {
    this.dialogRef.close();
  }
}
