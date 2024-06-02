import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { TemplatesHomeComponent } from './zone-templates/templates-home/templates-home.component';
import { ZoneTemplateComponent } from './zone-templates/zone-template/zone-template.component';
import { ZoneTemplateEditComponent } from './zone-templates/zone-template-edit/zone-template-edit.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { AdminErrorHandler } from '@app/core/handlers/admin-error-handler';
import { MaterialModule } from '@materials/material.module';

@NgModule({
  declarations: [
    HomeComponent,
    TemplatesHomeComponent,
    ZoneTemplateComponent,
    ZoneTemplateEditComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SettingsRoutingModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: AdminErrorHandler
    }
  ]
})
export class SettingsModule { }
