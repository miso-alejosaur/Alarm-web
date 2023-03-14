import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dow-selector',
  templateUrl: './dow-selector.component.html',
  styleUrls: ['./dow-selector.component.css']
})
export class DowSelectorComponent implements OnInit {

  @Input() dow!: String;
  @Input() selected!: Boolean;
  constructor() {
   }

  ngOnInit(): void {
  }

  onSelected(){
    this.selected = !this.selected;
  }
}
