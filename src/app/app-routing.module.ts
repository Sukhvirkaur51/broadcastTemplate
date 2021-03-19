import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementsComponent } from './elements/elements.component';
import { GenericComponent } from './generic/generic.component';
import { HomeComponent } from './home/home.component';
import { ThemesComponent } from './themes/themes.component';

const routes: Routes = [
  {
    path: 'generic',
    component: GenericComponent

  },
  {
    path: 'elements',
    component: ElementsComponent,

    children:[

      {
        path: 'themes',
        component: ThemesComponent
      },
    ]

  },
  {
    path: '',
    component: HomeComponent

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
