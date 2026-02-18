import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HasieraPage } from './hasiera.page';

describe('HasieraPage', () => {
  let component: HasieraPage;
  let fixture: ComponentFixture<HasieraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HasieraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
