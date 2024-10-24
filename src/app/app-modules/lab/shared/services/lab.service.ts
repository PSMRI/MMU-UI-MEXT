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

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable()
export class LabService {
  constructor(private http: HttpClient) {}

  getLabWorklist() {
    const serviceLineDetails: any = localStorage.getItem('serviceLineDetails');
    const vanID = JSON.parse(serviceLineDetails).vanID;
    const fetchUrl =
      localStorage.getItem('providerServiceID') +
      `/${localStorage.getItem('serviceID')}/${vanID}`;
    return this.http.get(environment.labWorklist + fetchUrl);
  }

  getEcgAbnormalities() {
    return this.http.get(environment.getEcgAbnormalitiesMasterUrl);
  }

  saveLabWork(techForm: any) {
    return this.http.post(environment.labSaveWork, techForm);
  }

  saveFile(file: any) {
    return this.http.post(environment.saveFile, file);
  }

  viewFileContent(viewFileIndex: any) {
    return this.http.post(environment.viewFileData, viewFileIndex, {
      responseType: 'blob' as 'json',
    });
  }
}
