import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Message } from 'src/app/interfaces/message.interface';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-message-bubble',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './message-bubble.component.html',
  styleUrls: ['./message-bubble.component.scss'],
})
export class MessageBubbleComponent {
  @Input() message!: Message;
  @Input() reversed!: boolean;
}
