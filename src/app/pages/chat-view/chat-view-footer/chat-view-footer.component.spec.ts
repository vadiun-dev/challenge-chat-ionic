import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatViewFooterComponent } from './chat-view-footer.component';

describe('ChatViewFooterComponent', () => {
  let component: ChatViewFooterComponent;
  let fixture: ComponentFixture<ChatViewFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatViewFooterComponent]
    });
    fixture = TestBed.createComponent(ChatViewFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
