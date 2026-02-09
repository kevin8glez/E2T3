import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LangileakPage } from './langileak.page';

describe('LangileakPage', () => {
  let component: LangileakPage;
  let fixture: ComponentFixture<LangileakPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LangileakPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
