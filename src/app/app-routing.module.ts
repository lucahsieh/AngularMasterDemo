import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentLayoutComponent } from './core/layout/content-layout/content-layout.component';


const routes: Routes = [
  // {
  //   path:'',
  //   redirectTo:'content',
  //   pathMatch:'full'
  // },
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
      }
    ]
  },




];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
