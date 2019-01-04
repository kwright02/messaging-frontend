import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitPostCreationDialogComponent } from './exit-post-creation-dialog.component';

describe('ExitPostCreationDialogComponent', () => {
  let component: ExitPostCreationDialogComponent;
  let fixture: ComponentFixture<ExitPostCreationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExitPostCreationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExitPostCreationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
