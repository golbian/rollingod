import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RollComponent } from './roll.component';

describe('RollComponent', () => {
  let component: RollComponent;
  let fixture: ComponentFixture<RollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
