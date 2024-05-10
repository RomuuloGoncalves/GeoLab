import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerguntasPageRoutingModule } from './perguntas-routing.module';

import { PerguntasPage } from './perguntas.page';
import { HeaderModule } from 'src/app/components/common/header/header.module';
import { FooterModule } from 'src/app/components/common/footer/footer.module';
import { LoadingModule } from 'src/app/components/common/loading/loading.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerguntasPageRoutingModule,
    HeaderModule,
    FooterModule,
    LoadingModule
  ],
  declarations: [PerguntasPage]
})
export class PerguntasPageModule {}
