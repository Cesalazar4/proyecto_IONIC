import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArmorClassPage } from './armor-class.page';

describe('ArmorClassPage', () => {
  let component: ArmorClassPage;
  let fixture: ComponentFixture<ArmorClassPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmorClassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
