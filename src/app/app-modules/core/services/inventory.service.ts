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

import { Injectable, Inject } from '@angular/core';
import { ConfirmationService } from '../../core/services/confirmation.service';
import { environment } from 'src/environments/environment';
import { DOCUMENT } from '@angular/common';
import { SessionStorageService } from 'Common-UI/src/registrar/services/session-storage.service';
@Injectable()
export class InventoryService {
  inventoryUrl: any;
  language: any;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private confirmationService: ConfirmationService,
    readonly sessionstorage: SessionStorageService
  ) {}

  moveToInventory(
    benID: any,
    visit: any,
    flowID: any,
    language: any,
    regID: any
  ) {
    const authKey = this.getAuthKey();
    const facility = this.getFacilityID();
    const protocol = this.getProtocol();
    const host = this.getHost();
    const vanID = this.getVanID();
    const ppID = this.getppID();
    const serviceName = this.getServiceDetails();
    const parentAPI = this.getParentAPI();

    if (authKey && protocol && host && facility) {
      // uncomment later
      this.inventoryUrl = `${environment.INVENTORY_URL}protocol=${protocol}&host=${host}&user=${authKey}&app=${environment.app}&fallback=${environment.fallbackUrl}&back=${environment.redirInUrl}&facility=${facility}&ben=${benID}&visit=${visit}&flow=${flowID}&reg=${regID}&vanID=${vanID}&ppID=${ppID}&serviceName=${serviceName}&parentAPI=${parentAPI}&currentLanguage=${language}`;
      console.log(this.inventoryUrl);
      window.location.href = this.inventoryUrl;
    } else {
      this.confirmationService.alert(
        'No Facility mapped, Can not connect to Inventory',
        'error'
      );
    }
  }
  getParentAPI() {
    return environment.parentAPI;
  }
  getAuthKey() {
    if (sessionStorage.getItem('isAuthenticated')) {
      return sessionStorage.getItem('key');
    } else return undefined;
  }

  getFacilityID() {
    if (sessionStorage.getItem('facilityID')) {
      return sessionStorage.getItem('facilityID');
    } else {
      return undefined;
    }
  }
  getProtocol() {
    return this.document.location.protocol;
  }

  getHost() {
    console.log(this.document.location, 'location');
    console.log(
      `${this.document.location.host}${this.document.location.pathname}`
    );
    return `${this.document.location.host}${this.document.location.pathname}`;
  }

  getVanID() {
    const serviceLineDetailsData: any =
      this.sessionstorage.getItem('serviceLineDetails');
    const serviceLineDetails = JSON.parse(serviceLineDetailsData);
    return serviceLineDetails.vanID;
  }
  getppID() {
    const serviceLineDetailsData: any =
      this.sessionstorage.getItem('serviceLineDetails');
    const serviceLineDetails = JSON.parse(serviceLineDetailsData);
    return serviceLineDetails.parkingPlaceID;
  }

  getServiceDetails() {
    const serviceName = this.sessionstorage.getItem('serviceName');
    return serviceName;
  }
}
