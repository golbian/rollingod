import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AchilleComponent } from '../achille/achille.component';
import { RollComponent } from '../roll/roll.component';
import { ZeusComponent } from '../zeus/zeus.component';
import { HerculeComponent } from '../hercule/hercule.component';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { RulesComponent } from '../rules/rules.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule
  ],
  declarations: [Tab2Page, ZeusComponent, AchilleComponent, RollComponent, HerculeComponent, RulesComponent]
})
export class Tab2PageModule {}
