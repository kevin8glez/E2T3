import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KontaktuaPage } from './kontaktua.page';

describe('KontaktuaPage', () => {
  let component: KontaktuaPage;
  let fixture: ComponentFixture<KontaktuaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KontaktuaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
