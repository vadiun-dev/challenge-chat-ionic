import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatViewHeaderComponent } from './chat-view-header.component';

describe('ChatViewHeaderComponent', () => {
  let component: ChatViewHeaderComponent;
  let fixture: ComponentFixture<ChatViewHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatViewHeaderComponent]
    });
    fixture = TestBed.createComponent(ChatViewHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
