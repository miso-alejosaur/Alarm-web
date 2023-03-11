import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alarm-form',
  templateUrl: './alarm-form.component.html',
  styleUrls: ['./alarm-form.component.css']
})
export class AlarmFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }
}
