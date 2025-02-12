/*
 * AMRIT – Accessible Medical Records via Integrated Technology
 * Integrated EHR (Electronic Health Records) Solution
 *
 * Copyright (C) "Piramal Swasthya Management and Research Institute"
 *
 * This file is part of AMRIT.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see https://www.gnu.org/licenses/.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegisterPersonalDetailsComponent } from './registration/register-personal-details/register-personal-details.component';
import { RegisterDemographicDetailsComponent } from './registration/register-demographic-details/register-demographic-details.component';
import { RegisterOtherDetailsComponent } from './registration/register-other-details/register-other-details.component';

import { RegisterEditLocationComponent } from './registration/register-edit-location/register-edit-location.component';
import { MaterialModule } from '../core/material.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CoreModule } from '../core/core.module';
import { RegistrarRoutingModule } from './registrar-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { RegistrarService } from './shared/services/registrar.service';
import { SearchComponent } from './search/search.component';
import { SearchDialogComponent } from './search-dialog/search-dialog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../core/components/shared/shared.module';
// import { SharedModule } from '../core/shared/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    CoreModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatTableModule,
    RegistrarRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [RegistrarService],
  declarations: [
    RegistrationComponent,
    RegisterPersonalDetailsComponent,
    RegisterDemographicDetailsComponent,
    RegisterOtherDetailsComponent,
    RegisterEditLocationComponent,
    SearchComponent,
    SearchDialogComponent,
    DashboardComponent,
  ],
})
export class RegistrarModule {}
