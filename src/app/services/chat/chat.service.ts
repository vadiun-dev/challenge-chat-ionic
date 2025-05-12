import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Message, Messages } from 'src/app/interfaces/message.interface';
import { v4 as uuidv4 } from 'uuid';
import { WebsocketService } from '../websocket/websocket.service';
import { HttpClient } from '@angular/common/http';
import { Preferences } from '@capacitor/preferences';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  messages$ = new BehaviorSubject<Messages>([]);
  status$ = new BehaviorSubject<string>('idle');

  constructor(private wsSrv: WebsocketService, private http: HttpClient) {
    this.init();
  }

  setMessages = (messages: Messages) => this.messages$.next(messages);
  setStatus = (status: string) => this.status$.next(status);

  async createNewChat() {
    const newId = uuidv4();
    console.log('Creating new chat with ID:', newId);
    console.log(
      'WebSocket connection status:',
      this.wsSrv.getConnection().connected ? 'Connected' : 'Disconnected'
    );
    this.wsSrv.getConnection().emit('initialize_chat', newId);
    console.log('Emitted initialize_chat event');
    await Preferences.set({ key: 'uuid', value: newId }); // Reemplaza localStorage
    await this.loadChatMessages();
    return newId;
  }

  async loadChatMessages() {
    const uuid = (await Preferences.get({ key: 'uuid' })).value;
    if (!uuid) return;

    console.log(
      `Loading chat messages from ${environment.apiUrl}/messages/${uuid}`
    );

    this.http
      .get<Messages>(`${environment.apiUrl}/messages/${uuid}`)
      .subscribe({
        next: (data) => {
          console.log('Received messages:', data);
          this.setMessages(data);
        },
        error: (err) => console.error('Error loading messages:', err),
      });
  }

  async sendMessage(message: string) {
    const uuid = (await Preferences.get({ key: 'uuid' })).value;
    if (!uuid) return;
    console.log('Sending message:', message, 'with UUID:', uuid);
    this.wsSrv.getConnection().emit('message_emitted', { message, uuid });
  }

  init() {
    this.wsSrv.getConnection().on('new_message', (data: Message) => {
      console.log('Received new message:', data);
      this.setMessages([...this.messages$.getValue(), data]);
    });

    this.loadChatMessages();
    this.wsSrv.getConnection().on('writing', () => {
      console.log('Server is writing...');
      this.setStatus('waiting');
    });
  }
}
