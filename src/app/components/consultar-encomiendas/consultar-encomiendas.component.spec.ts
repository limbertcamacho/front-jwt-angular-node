import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarEncomiendasComponent } from './consultar-encomiendas.component';

describe('ConsultarEncomiendasComponent', () => {
  let component: ConsultarEncomiendasComponent;
  let fixture: ComponentFixture<ConsultarEncomiendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarEncomiendasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarEncomiendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
