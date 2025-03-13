import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatViewRoutingModule } from './chat-view-routing.module';
import { ChatViewComponent } from './chat-view.component';
import { CommonLayoutComponent } from 'src/app/layouts/common-layout/common-layout.component';
import { ChatViewHeaderComponent } from './chat-view-header/chat-view-header.component';
import { AvatarComponent } from 'src/app/components/avatar/avatar.component';
import { ChatViewFooterComponent } from './chat-view-footer/chat-view-footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatViewMessageListComponent } from './chat-view-message-list/chat-view-message-list.component';
import { MessageBubbleComponent } from 'src/app/components/message-bubble/message-bubble.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    ChatViewComponent,
    ChatViewFooterComponent,
    ChatViewHeaderComponent,
    ChatViewMessageListComponent,
    AvatarComponent,
    CommonLayoutComponent,
    MessageBubbleComponent,
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    ChatViewRoutingModule,
  ],
})
export class ChatViewModule {}
