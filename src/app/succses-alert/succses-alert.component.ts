import { Component } from '@angular/core';

@Component({
  selector: 'app-succses-alert',
  templateUrl: './succses-alert.component.html',
  styleUrls: ['./succses-alert.component.css']
})
export class SuccsesAlertComponent {
  serverId = 10;
  serverStatus = 'offline';
  // tslint:disable-next-line:typedef
  getServerStatus(){
    return this.serverStatus;
  }
}
