export class Alarm {

  hours: number;
  minutes: number;
  name: string;
  strategy: string;
  contact: string | null;
  dow: string;

  constructor(hours: number, minutes: number, name: string, strategy: string, contact: string | null, dow: string) {

    this.hours = hours;
    this.minutes = minutes;
    this.name = name;
    this.strategy = strategy;
    this.contact = contact;
    this.dow = dow;
  }
}

