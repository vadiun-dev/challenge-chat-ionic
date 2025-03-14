import { Component, OnInit } from '@angular/core';
import { Messages } from 'src/app/interfaces/message.interface';
import { CommonLayoutComponent } from 'src/app/layouts/common-layout/common-layout.component';
import { ChatService } from 'src/app/services/chat/chat.service';
import { ChatViewHeaderComponent } from './chat-view-header/chat-view-header.component';
import { ChatViewMessageListComponent } from './chat-view-message-list/chat-view-message-list.component';
import { ChatViewFooterComponent } from './chat-view-footer/chat-view-footer.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.scss'],
  imports: [
    CommonLayoutComponent,
    ChatViewHeaderComponent,
    ChatViewMessageListComponent,
    ChatViewFooterComponent,
    IonicModule,
    CommonModule,
  ],
})
export class ChatViewComponent implements OnInit {
  status: boolean = false;
  messages: Messages = [];
  apiUrl = environment.apiUrl;

  constructor(private _chatService: ChatService) {}

  ngOnInit(): void {
    this._chatService.messages$.subscribe((messages) => {
      this.messages = messages;
      const el = document.getElementById('messages');
      if (el) {
        el.scrollTop = el.scrollHeight;
      }
    });
  }

  handleSubmit = (inputTextValue: string) => {
    this._chatService.sendMessage(inputTextValue);
  };

  createNewChat = () => {
    this._chatService.createNewChat();
  };

  sendMessage = (inputTextValue: string) => {
    this._chatService.sendMessage(inputTextValue);
  };
}
