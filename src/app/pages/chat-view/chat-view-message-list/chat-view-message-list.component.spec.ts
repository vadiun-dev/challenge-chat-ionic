import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatViewMessageListComponent } from './chat-view-message-list.component';

describe('ChatViewMessageListComponent', () => {
  let component: ChatViewMessageListComponent;
  let fixture: ComponentFixture<ChatViewMessageListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatViewMessageListComponent]
    });
    fixture = TestBed.createComponent(ChatViewMessageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
