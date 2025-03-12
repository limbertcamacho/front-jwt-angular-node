import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarRutasParadasComponent } from './registrar-rutas-paradas.component';

describe('RegistrarRutasParadasComponent', () => {
  let component: RegistrarRutasParadasComponent;
  let fixture: ComponentFixture<RegistrarRutasParadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarRutasParadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarRutasParadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
