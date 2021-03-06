import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { AchilleComponent } from '../achille/achille.component';
import { RollComponent } from '../roll/roll.component';
import { ZeusComponent } from '../zeus/zeus.component';
import { HerculeComponent } from '../hercule/hercule.component';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page, ZeusComponent, AchilleComponent, RollComponent, HerculeComponent]
})
export class Tab1PageModule {}
