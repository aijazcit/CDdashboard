import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { HookComponent } from './hook/hook.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PipesamplesComponent } from './pipesamples/pipesamples.component';
import { RoutesampleComponent } from './routesample/routesample.component';

const routes: Routes = [
  {path:'emp', component:EmployeeComponent},
  {path:'department', component:DepartmentComponent},
  {path:'hook', component:HookComponent},
  {path:'pipesamples', component:PipesamplesComponent},
  {path:'routesample/:Id/:PageNum', component:RoutesampleComponent,children:[
    {path:'child1', component:Child1Component},
    {path:'child2', component:Child2Component}
  ]},
  {path:'404', component:NotfoundComponent},
  {path:'admin', loadChildren:'./admin/admin.module#AdminModule'},
  {path:'**', redirectTo:'404'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
