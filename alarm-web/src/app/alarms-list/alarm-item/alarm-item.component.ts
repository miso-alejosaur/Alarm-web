import { Component, Input, OnInit } from '@angular/core';
import { Alarm } from '../alarm';

@Component({
  selector: 'app-alarm-item',
  templateUrl: './alarm-item.component.html',
  styleUrls: ['./alarm-item.component.css']
})
export class AlarmItemComponent implements OnInit {

  @Input() alarm!: Alarm;
  constructor() {
   }

  ngOnInit(): void {
  }

}
