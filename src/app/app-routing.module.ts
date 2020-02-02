import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentLayoutComponent } from './core/layout/content-layout/content-layout.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginLayoutComponent } from './core/layout/login-layout/login-layout.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'content',
    canActivate: [AuthGuard],
    pathMatch: 'full'
  },
  {
    path: '',
    component: ContentLayoutComponent,

    children: [
      {
        path: 'cities',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'employee',
        loadChildren: () => import('./modules/employee/employee.module').then(m => m.EmployeeModule)
      },
    ]
  },
  {
    path: 'auth',
    component: LoginLayoutComponent,
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  // // Fallback when no prior routes is matched
  // { path: '**', redirectTo: '/auth/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
