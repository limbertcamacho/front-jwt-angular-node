import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarSerieBoletaComponent } from './registrar-serie-boleta.component';

describe('RegistrarSerieBoletaComponent', () => {
  let component: RegistrarSerieBoletaComponent;
  let fixture: ComponentFixture<RegistrarSerieBoletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarSerieBoletaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarSerieBoletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
