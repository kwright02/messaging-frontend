import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPanelComponent } from './post-panel.component';

describe('PostPanelComponent', () => {
  let component: PostPanelComponent;
  let fixture: ComponentFixture<PostPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
