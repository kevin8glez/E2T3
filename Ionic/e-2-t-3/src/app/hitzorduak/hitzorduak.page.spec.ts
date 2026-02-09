import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { HitzorduakPage } from './hitzorduak.page';

describe('HitzorduakPage', () => {
  let component: HitzorduakPage;
  let fixture: ComponentFixture<HitzorduakPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HitzorduakPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HitzorduakPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
