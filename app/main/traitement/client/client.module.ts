import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../../../_helpers/auth.guard';
import { ClientComponent } from './client.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule } from '@angular/material/tabs';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {MatDialogModule} from '@angular/material/dialog';
const routes = [
  {
      path     : 'client',
      component: ClientComponent, canActivate: [AuthGuard]
  }
];


@NgModule({
  declarations: [
    ClientComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatStepperModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        CommonModule,
        MatTabsModule,
        NgxDatatableModule,
        MatDialogModule
  ]
})
export class ClientModule { }
