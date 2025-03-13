import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MessageBubbleComponent } from 'src/app/components/message-bubble/message-bubble.component';
import { Messages } from 'src/app/interfaces/message.interface';

@Component({
  selector: 'app-chat-view-message-list',
  templateUrl: './chat-view-message-list.component.html',
  styleUrls: ['./chat-view-message-list.component.scss'],
  standalone: true,
  imports: [IonicModule, MessageBubbleComponent, CommonModule],
})
export class ChatViewMessageListComponent {
  @Input() messages: Messages = [];
}
