import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab3PageRoutingModule } from './tab3-routing.module';
import { AchilleComponent } from '../achille/achille.component';
import { RollComponent } from '../roll/roll.component';
import { ZeusComponent } from '../zeus/zeus.component';
import { HerculeComponent } from '../hercule/hercule.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }]),
    Tab3PageRoutingModule,
  ],
  declarations: [Tab3Page, ZeusComponent, AchilleComponent, RollComponent, HerculeComponent]
})
export class Tab3PageModule {}
