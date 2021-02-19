import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleComponent } from './example.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../../_helpers/auth.guard';
const routes = [
  {
      path     : 'example',
      component: ExampleComponent, canActivate: [AuthGuard]
  }
];


@NgModule({
  declarations: [
    ExampleComponent
  ],
  imports: [
    RouterModule.forChild(routes),
  ]
})
export class ExampleModule { }
