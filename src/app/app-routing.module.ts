import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { loginGuard } from './guards/login.guard';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    path: 'employees',
    component: EmployeeComponent,
    canActivate: [loginGuard],
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'rooms',
    canActivate: [loginGuard],
    loadChildren: () =>
      import('./rooms/rooms.module').then((m) => m.RoomsModule),
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'booking',
    // canActivate: [loginGuard],
    loadChildren: () =>
      import('./booking/booking.module').then((m) => m.BookingModule),
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
