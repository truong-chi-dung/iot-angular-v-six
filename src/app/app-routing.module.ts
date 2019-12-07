import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';
import { EditDetailComponent } from './detail/edit-detail/edit-detail.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService } from './@service/auth-guard.service';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { 
    path: 'detail/:id', 
    component: DetailComponent,
    canActivateChild: [AuthGuardService],
    children: [
      { path: 'edit', component: EditDetailComponent}
    ] 
  },
  { path: 'detail/:id/:startTime/:endTime/:shift', component: DetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
