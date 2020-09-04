import { Component } from '@angular/core';

@Component({
  selector: 'app-succses-alert',
  templateUrl: './succses-alert.component.html',
  styleUrls: ['./succses-alert.component.css']
})
export class SuccsesAlertComponent {
  serverId = 10;
  serverStatus = 'offline';
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
  // tslint:disable-next-line:typedef
  getServerStatus(){
    return this.serverStatus;
  }
  // tslint:disable-next-line:typedef
  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red'
  }
}
