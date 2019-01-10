import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentPostComponentComponent } from './sent-post-component.component';

describe('SentPostComponentComponent', () => {
  let component: SentPostComponentComponent;
  let fixture: ComponentFixture<SentPostComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentPostComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentPostComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
