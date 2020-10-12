import { Component } from "@angular/core";

@Component({
  selector: "app-date",
  template: `
    <p>His birthday is {{ birthday | date: format | uppercase }}</p>
    <button (click)="toggleFormat()">Toggle Format</button>
    <p>
      Or in a different date format: Birthdate is:
      {{ birthday | date | uppercase }}
    </p>
  `
})
export class AppDate {
  birthday = new Date(1959, 3, 13);
  toggle = false;

  get format() {
    return this.toggle ? "shortDate" : "fullDate";
  }
  toggleFormat() {
    this.toggle = !this.toggle;
  }
}
