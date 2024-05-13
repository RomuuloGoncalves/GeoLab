import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TutoriaisPageRoutingModule } from './tutoriais-routing.module';

import { TutoriaisPage } from './tutoriais.page';
import { HeaderModule } from 'src/app/components/common/header/header.module';
import { FooterModule } from 'src/app/components/common/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TutoriaisPageRoutingModule,
    HeaderModule,
    FooterModule
  ],
  declarations: [TutoriaisPage]
})
export class TutoriaisPageModule {}
