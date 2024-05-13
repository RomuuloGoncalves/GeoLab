import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutoriaisPage } from './tutoriais.page';

const routes: Routes = [
  {
    path: '',
    component: TutoriaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TutoriaisPageRoutingModule {}
