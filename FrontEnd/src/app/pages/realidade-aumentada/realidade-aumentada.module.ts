import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RealidadeAumentadaPageRoutingModule } from './realidade-aumentada-routing.module';

import { RealidadeAumentadaPage } from './realidade-aumentada.page';
import { ViewComponent } from 'src/app/components/ra/view/view.component';
import { HeaderModule } from 'src/app/components/common/header/header.module';
import { LoadingModule } from 'src/app/components/common/loading/loading.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RealidadeAumentadaPageRoutingModule,
    HeaderModule,
    LoadingModule
  ],
  declarations: [RealidadeAumentadaPage, ViewComponent]
})
export class RealidadeAumentadaPageModule {}
