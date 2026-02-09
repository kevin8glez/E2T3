import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { LangileakPage } from './langileak.page';

describe('LangileakPage', () => {
  let component: LangileakPage;
  let fixture: ComponentFixture<LangileakPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LangileakPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LangileakPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
