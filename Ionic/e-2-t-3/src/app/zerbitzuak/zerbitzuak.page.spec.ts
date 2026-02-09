import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ZerbitzuakPage } from './zerbitzuak.page';

describe('ZerbitzuakPage', () => {
  let component: ZerbitzuakPage;
  let fixture: ComponentFixture<ZerbitzuakPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZerbitzuakPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ZerbitzuakPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
