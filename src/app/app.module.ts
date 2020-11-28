import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { EmployeeComponent } from './employee/employee.component';
import { MydirectiveDirective } from './employee/mydirective.directive';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DepartmentComponent } from './department/department.component';
import { HookComponent } from './hook/hook.component';
import { HookDirectiveDirective } from './hook/hook-directive.directive';
import { PipesamplesComponent } from './pipesamples/pipesamples.component';
import { MypipePipe } from './mypipe.pipe';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { RoutesampleComponent } from './routesample/routesample.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    EmployeeComponent,
    MydirectiveDirective,
    EmployeeListComponent,
    DepartmentComponent,
    HookComponent,
    HookDirectiveDirective,
    PipesamplesComponent,
    MypipePipe,
    MenuComponent,
    FooterComponent,
    RoutesampleComponent,
    NotfoundComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
