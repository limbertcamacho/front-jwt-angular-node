import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarBusesComponent } from './registrar-buses.component';

describe('RegistrarBusesComponent', () => {
  let component: RegistrarBusesComponent;
  let fixture: ComponentFixture<RegistrarBusesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarBusesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarBusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
