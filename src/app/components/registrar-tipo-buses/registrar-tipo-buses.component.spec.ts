import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarTipoBusesComponent } from './registrar-tipo-buses.component';

describe('RegistrarTipoBusesComponent', () => {
  let component: RegistrarTipoBusesComponent;
  let fixture: ComponentFixture<RegistrarTipoBusesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarTipoBusesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarTipoBusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
