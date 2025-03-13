import { Routes } from '@angular/router';

export const AppScreens: Routes = [
  {
    path: 'chat',
    loadChildren: () =>
      import('../pages/chat-view/chat-view.module').then(
        (m) => m.ChatViewModule
      ),
  },
  {
    path: '',
    redirectTo: 'chat',
    pathMatch: 'full',
  },
];
