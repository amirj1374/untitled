import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit{
  allowNewServer = false;
  serverCreationStatus = 'no server was created';
  serverName = '';
  serverCreated = false ;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  // tslint:disable-next-line:typedef
  ngOnInit() {
  }
  // tslint:disable-next-line:typedef
  onCreatServer(){
    this.serverCreated = true;
    this.serverCreationStatus = 'server was created !! server name ' + this.serverName ;
  }
  // tslint:disable-next-line:typedef
  onUpdateServerName(event: Event){
    this.serverName = (event.target as HTMLInputElement).value;
  }
}
