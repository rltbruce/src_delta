import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Example3Component } from './example3.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../../_helpers/auth.guard';
const routes = [
  {
      path     : 'example3',
      component: Example3Component, canActivate: [AuthGuard]
  }
];


@NgModule({
  declarations: [
    Example3Component
  ],
  imports: [
    RouterModule.forChild(routes),
  ]
})
export class Example3Module { }
