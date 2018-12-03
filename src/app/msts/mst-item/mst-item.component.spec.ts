import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MstItemComponent } from './mst-item.component';

describe('MstItemComponent', () => {
  let component: MstItemComponent;
  let fixture: ComponentFixture<MstItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MstItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MstItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
