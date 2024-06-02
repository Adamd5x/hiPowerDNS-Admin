import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@materials/material.module';

import { SharedModule } from '@app/shared/shared.module';
import { ZoneTemplatesRoutingMonule } from './zone-templates-routing.module';

import { TemplatesHomeComponent } from './templates-home/templates-home.component';
import { ZoneTemplateDetailsComponent } from './zone-template-details/zone-template-details.component';
import { ZoneTemplateEditComponent } from './zone-template-edit/zone-template-edit.component';

@NgModule({
  declarations: [
    TemplatesHomeComponent,
    ZoneTemplateDetailsComponent,
    ZoneTemplateEditComponent
  ],
  imports: [    
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModule,
    SharedModule,
    ZoneTemplatesRoutingMonule
  ]
})
export class ZoneTemplatesModule { }
