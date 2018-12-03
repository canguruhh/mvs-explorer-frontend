import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MitItemComponent } from './mit-item.component';

describe('MitItemComponent', () => {
  let component: MitItemComponent;
  let fixture: ComponentFixture<MitItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MitItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MitItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
