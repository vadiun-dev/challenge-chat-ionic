import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppScreens } from './constants/routes.constants';

@NgModule({
  imports: [
    RouterModule.forRoot(AppScreens, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
