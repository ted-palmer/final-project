import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService  } from '../app/guard/auth-guard.service'

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'registration', loadChildren: './pages/registration/registration.module#RegistrationPageModule' },
  { path: 'user', loadChildren: './pages/user/user.module#UserPageModule' },
  { path: 'properties', loadChildren: './pages/properties/properties.module#PropertiesPageModule' },
  { path: 'property-details', loadChildren: './pages/property-details/property-details.module#PropertyDetailsPageModule' },
  { path: 'create-property', loadChildren: './pages/create-property/create-property.module#CreatePropertyPageModule' },
  { path: 'booking-requests', loadChildren: './pages/booking-requests/booking-requests.module#BookingRequestsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
