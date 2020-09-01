import { Component, OnInit } from '@angular/core';
import {style} from '@angular/animations';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit{
  allowNewServer = false;
  serverCreationStatus = 'no server was created';
  serverName = '';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 10000);
  }
  // tslint:disable-next-line:typedef
  ngOnInit() {
  }
  // tslint:disable-next-line:typedef
  onCreatServer(){
    this.serverCreationStatus = 'server was created';
  }
  // tslint:disable-next-line:typedef
  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement> event.target).value;
  }
}
