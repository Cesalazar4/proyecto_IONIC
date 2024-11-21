import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PconocidasPage } from './pconocidas.page';

describe('PconocidasPage', () => {
  let component: PconocidasPage;
  let fixture: ComponentFixture<PconocidasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PconocidasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
