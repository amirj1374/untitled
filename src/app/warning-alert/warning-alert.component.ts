import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
  <p>danger</p>
  `,
  styles: [
    `
      p {
        padding: 20px;
        background-color: mistyrose;
        border: 3px solid red;
      }
    `
  ]
})
export class WarningAlertComponent {
}
