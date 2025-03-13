import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AvatarComponent } from 'src/app/components/avatar/avatar.component';

@Component({
  selector: 'app-chat-view-header',
  templateUrl: './chat-view-header.component.html',
  styleUrls: ['./chat-view-header.component.scss'],
  standalone: true,
  imports: [IonicModule, AvatarComponent, CommonModule],
})
export class ChatViewHeaderComponent {
  @Input() user: any;
  @Input() status: 'waiting' | string = '';
}
