import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-contac-selector',
  templateUrl: './contac-selector.component.html',
  styleUrls: ['./contac-selector.component.css']
})
export class ContacSelectorComponent implements OnInit {

  contacts: string[] = ["Pedro López", "Enrico Fermi", "Piotr Kropotkin", "Marco Pantani"]
  constructor(public dialogRef: MatDialogRef<ContacSelectorComponent>) { }

  ngOnInit(): void {
  }

  closeModal() {
    console.log("AAAAAAAAAA");
    this.dialogRef.close();
  }
}
