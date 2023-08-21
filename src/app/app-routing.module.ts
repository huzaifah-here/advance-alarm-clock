import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { SetAlarmComponent } from './pages/set-alarm/set-alarm.component';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },
  {
    path: '',
    loadChildren: () => import('./pages/main-page/main-page.module').then( m => m.MainPagePageModule)
  },
  // { path: 'set-alarm', component: SetAlarmComponent },
  {
    path: 'set-alarm',
    loadChildren: () => import('./pages/set-alarm/set-alarm.module').then( m => m.SetAlarmPageModule)
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
