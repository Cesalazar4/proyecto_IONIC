import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfigJugadorPage } from './config-jugador.page';

describe('ConfigJugadorPage', () => {
  let component: ConfigJugadorPage;
  let fixture: ComponentFixture<ConfigJugadorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigJugadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
