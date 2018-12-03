import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarItemComponent } from './avatar-item.component';

describe('AvatarItemComponent', () => {
  let component: AvatarItemComponent;
  let fixture: ComponentFixture<AvatarItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvatarItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
