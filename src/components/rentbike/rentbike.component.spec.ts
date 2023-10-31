/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RentbikeComponent } from './rentbike.component';

describe('RentbikeComponent', () => {
  let component: RentbikeComponent;
  let fixture: ComponentFixture<RentbikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentbikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentbikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
