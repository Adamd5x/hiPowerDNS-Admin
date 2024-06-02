import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';

import { FooterComponent } from "@app/layouts/footer/footer.component";
import { HeaderComponent } from "@app/layouts/header/header.component";
import { SidebarComponent } from "@app/layouts/sidebar/sidebar.component";
import { DashboardComponent } from "@app/pages/dashboard/dashboard.component";
import { ErrorNotFoundComponent } from "@app/pages/error-not-found/error-not-found.component";
import { LoginComponent } from "@app/pages/login/login.component";
import { PassRecoverComponent } from "@app/pages/pass-recover/pass-recover.component";

const coreModules = [
    BrowserModule,
    DashboardComponent,
    ErrorNotFoundComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    LoginComponent,
    PassRecoverComponent   
]

@NgModule({
    declarations: [coreModules],
    exports: [coreModules]
})
export class CoreModule {
}