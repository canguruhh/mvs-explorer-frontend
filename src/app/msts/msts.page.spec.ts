import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MstsPage } from './msts.page';

describe('MstsPage', () => {
  let component: MstsPage;
  let fixture: ComponentFixture<MstsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MstsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MstsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
