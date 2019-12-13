import { Injectable, Injector } from '@angular/core';
import { TenantService } from './tenant.service';

@Injectable()
export class AppRoutingService {
  constructor(injector: Injector, private tenantService: TenantService) {
  }

  initializeRoutes() {
    return new Promise(resolve => {
      if (this.tenantService.getTenant()) {
        resolve([
          { path: 'hotel-list', loadChildren: () => import('./hotel/hotel.module').then(m => m.HotelModule) },
          { path: '', redirectTo: 'hotel-list', pathMatch: 'full' }
        ]);
      } else {
        resolve([
          { path: 'natgeo-list', loadChildren: () => import('./natgeo/natgeo.module').then(m => m.NatgeoModule) },
          { path: '', redirectTo: 'natgeo-list', pathMatch: 'full' }
        ]);
      }
    });
  }
}
