/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BikepartsComponent } from './bikeparts.component';

describe('BikepartsComponent', () => {
  let component: BikepartsComponent;
  let fixture: ComponentFixture<BikepartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikepartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikepartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
