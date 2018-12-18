import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavepostcreationdialogComponent } from './leavepostcreationdialog.component';

describe('LeavepostcreationdialogComponent', () => {
  let component: LeavepostcreationdialogComponent;
  let fixture: ComponentFixture<LeavepostcreationdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeavepostcreationdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeavepostcreationdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
