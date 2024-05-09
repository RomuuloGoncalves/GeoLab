import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListagemPageRoutingModule } from './listagem-routing.module';

import { ListagemPage } from './listagem.page';
import { HeaderModule } from 'src/app/components/common/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListagemPageRoutingModule,
    HeaderModule
  ],
  declarations: [ListagemPage]
})
export class ListagemPageModule {}
