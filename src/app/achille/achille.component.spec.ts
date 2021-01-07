import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AchilleComponent } from './achille.component';

describe('AchilleComponent', () => {
  let component: AchilleComponent;
  let fixture: ComponentFixture<AchilleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchilleComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AchilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
