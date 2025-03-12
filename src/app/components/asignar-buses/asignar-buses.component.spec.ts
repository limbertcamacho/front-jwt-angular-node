import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarBusesComponent } from './asignar-buses.component';

describe('AsignarBusesComponent', () => {
  let component: AsignarBusesComponent;
  let fixture: ComponentFixture<AsignarBusesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarBusesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignarBusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
