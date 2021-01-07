import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HerculeComponent } from './hercule.component';

describe('HerculeComponent', () => {
  let component: HerculeComponent;
  let fixture: ComponentFixture<HerculeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerculeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HerculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
