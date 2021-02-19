import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { SampleModule } from 'app/main/sample/sample.module';
import { ExampleModule } from 'app/main/example/example.module';
import { Example3Module } from 'app/main/example3/example3.module';
import { Example4Module } from 'app/main/example4/example4.module';
import { ClientModule } from 'app/main/traitement/client/client.module';
import { AuthModule } from 'app/main/auth/auth.module';
import { AlertComponent } from './_components/alert/alert.component';
import { LoginComponent } from './main/auth/login/login.component';
import { SampleComponent } from '../app/main/sample/sample.component';

/* AUTH */
import { JwtInterceptor } from '../app/_helpers/jwt.interceptor';
import { ErrorInterceptor } from '../app/_helpers/error.interceptor';
import { AuthGuard } from '../app/_helpers/auth.guard';
import { AccueilComponent } from './main/accueil/accueil.component';
/* FIN AUTH */
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ExampleComponent } from './main/example/example.component';
import { Example2Component } from './main/example2/example2.component';
import { Example3Component } from './main/example3/example3.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
const appRoutes: Routes = [
    {
        path      : '**',
        redirectTo: 'sample'
    }

];
//export const appRoutingModule = RouterModule.forRoot(appRoutes);
@NgModule({
    declarations: [
        AppComponent,
        AlertComponent,
        AccueilComponent,
        Example2Component
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        ExampleModule,
        Example3Module,
        Example4Module,
        SampleModule,
        AuthModule,
        MatDialogModule,
        ClientModule,
        FlexLayoutModule,
        CommonModule,
        MatTabsModule
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

       
    ],
    bootstrap   : [
        AppComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
})
export class AppModule
{
}
