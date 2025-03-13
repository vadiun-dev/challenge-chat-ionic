import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  private webSocket!: Socket;

  constructor() {
    this.init();
  }

  init() {
    this.webSocket = io(environment.socketUrl);
  }

  getConnection() {
    return this.webSocket;
  }
}
