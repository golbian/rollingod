import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ZeusComponent } from './zeus.component';

describe('ZeusComponent', () => {
  let component: ZeusComponent;
  let fixture: ComponentFixture<ZeusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZeusComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ZeusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
