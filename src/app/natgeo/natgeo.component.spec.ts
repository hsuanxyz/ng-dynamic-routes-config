import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NatgeoComponent } from './natgeo.component';

describe('NatgeoComponent', () => {
  let component: NatgeoComponent;
  let fixture: ComponentFixture<NatgeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NatgeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NatgeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
