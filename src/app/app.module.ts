import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TenantService } from './tenant.service';
import { Router } from '@angular/router';

export function initSettings(injector: Injector, tenantService: TenantService) {
  return () => new Promise(resolve => {
    let routes = [];
    if (tenantService.getTenant()) {
      routes = [
        { path: 'hotel-list', loadChildren: () => import('./hotel/hotel.module').then(m => m.HotelModule) },
        { path: '', redirectTo: 'hotel-list', pathMatch: 'full' }
      ];
    } else {
      routes = [
        { path: 'natgeo-list', loadChildren: () => import('./natgeo/natgeo.module').then(m => m.NatgeoModule) },
        { path: '', redirectTo: 'natgeo-list', pathMatch: 'full' }
      ];
    }
    const router: Router = injector.get(Router);
    router.resetConfig(routes);
    resolve();
  });
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    TenantService,
    {
      provide : APP_INITIALIZER,
      useFactory : initSettings,
      deps : [Injector, TenantService],
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
