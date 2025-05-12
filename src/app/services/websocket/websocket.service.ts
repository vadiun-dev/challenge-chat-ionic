import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  private webSocket!: Socket;

  constructor() {
    this.init();
  }

  init() {
    console.log('Connecting to WebSocket server at:', environment.socketUrl);
    this.webSocket = io(environment.socketUrl);

    this.webSocket.on('connect', () => {
      console.log('WebSocket connected successfully');
    });

    this.webSocket.on('connect_error', (error) => {
      console.error('WebSocket connection error:', error);
    });
  }

  getConnection() {
    return this.webSocket;
  }
}
