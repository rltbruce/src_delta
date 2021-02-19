import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Example4Component } from './example4.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../../_helpers/auth.guard';
const routes = [
  {
      path     : 'example4',
      component: Example4Component, canActivate: [AuthGuard]
  }
];



@NgModule({
  declarations: [Example4Component],
  imports: [
    RouterModule.forChild(routes),
  ]
})
export class Example4Module { }
