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
    this.wsSrv.getConnection().emit('initialize_chat', newId);
    await Preferences.set({ key: 'uuid', value: newId }); // Reemplaza localStorage
    this.loadChatMessages();
    return newId;
  }

  async loadChatMessages() {
    const uuid = (await Preferences.get({ key: 'uuid' })).value;
    if (!uuid) return;

    this.http
      .get<Messages>(`${environment.socketUrl}/messages/${uuid}`)
      .subscribe({
        next: (data) => this.setMessages(data),
        error: (err) => console.error('Error cargando mensajes', err),
      });
  }

  async sendMessage(message: string) {
    const uuid = (await Preferences.get({ key: 'uuid' })).value;
    if (!uuid) return;
    this.wsSrv.getConnection().emit('message_emitted', { message, uuid });
  }

  init() {
    this.wsSrv.getConnection().on('new_message', (data: Message) => {
      this.setMessages([...this.messages$.getValue(), data]);
    });

    this.loadChatMessages();
    this.wsSrv.getConnection().on('writing', () => this.setStatus('waiting'));
  }
}
