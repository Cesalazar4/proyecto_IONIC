import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaracteristicasPage } from './caracteristicas.page';

describe('CaracteristicasPage', () => {
  let component: CaracteristicasPage;
  let fixture: ComponentFixture<CaracteristicasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CaracteristicasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
