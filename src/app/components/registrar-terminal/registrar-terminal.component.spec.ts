import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarTerminalComponent } from './registrar-terminal.component';

describe('RegistrarTerminalComponent', () => {
  let component: RegistrarTerminalComponent;
  let fixture: ComponentFixture<RegistrarTerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarTerminalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
