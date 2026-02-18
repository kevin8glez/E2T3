import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EquipmentFormPage } from './equipment-form.page';

describe('EquipmentFormPage', () => {
  let component: EquipmentFormPage;
  let fixture: ComponentFixture<EquipmentFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
