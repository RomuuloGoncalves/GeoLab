import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LogedGuard } from './auth/loged.guard';
import { RedirectGuard } from './auth/redirect.guard';
import { ViewComponent } from './components/ra/view/view.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [RedirectGuard]
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pages/cadastro/cadastro.module').then( m => m.CadastroPageModule),
    canActivate: [RedirectGuard]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate: [LogedGuard]
  },
  {
    path: 'privacidade',
    loadChildren: () => import('./pages/privacidade/privacidade.module').then( m => m.PrivacidadePageModule)
  },
  {
    path: 'cookies',
    loadChildren: () => import('./pages/cookies/cookies.module').then( m => m.CookiesPageModule)
  },
  {
    path: 'termos',
    loadChildren: () => import('./pages/termos/termos.module').then( m => m.TermosPageModule)
  },
  {
    path: 'listagem',
    loadChildren: () => import('./pages/listagem/listagem.module').then( m => m.ListagemPageModule)
  },
  { path: 'webview', component: ViewComponent },
  {
    path: 'realidade-aumentada/:link',
    loadChildren: () => import('./pages/realidade-aumentada/realidade-aumentada.module').then( m => m.RealidadeAumentadaPageModule),
    canActivate: [LogedGuard]
  },
  {
    path: 'perguntas',
    loadChildren: () => import('./pages/perguntas/perguntas.module').then( m => m.PerguntasPageModule),
    canActivate: [LogedGuard]
  },
  {
    path: 'ranking',
    loadChildren: () => import('./pages/ranking/ranking.module').then( m => m.RankingPageModule),
    canActivate: [LogedGuard]

  },
  {
    path: 'tutoriais',
    loadChildren: () => import('./pages/tutoriais/tutoriais.module').then( m => m.TutoriaisPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }