import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-view-footer',
  templateUrl: './chat-view-footer.component.html',
  standalone: true,
  styleUrls: ['./chat-view-footer.component.scss'],
  imports: [IonicModule, ReactiveFormsModule, CommonModule],
})
export class ChatViewFooterComponent {
  @Output() onMessageSent: EventEmitter<string> = new EventEmitter();

  message: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(1),
  ]);

  send() {
    if (this.message.valid) {
      this.onMessageSent.emit(this.message.value);
    }
    this.message.reset();
  }
}
