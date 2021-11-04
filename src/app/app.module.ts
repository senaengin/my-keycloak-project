import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {RouterModule, Routes} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {KeycloakAngularModule} from "keycloak-angular";
import {HttpClientModule} from "@angular/common/http";
import {EmployeeComponent} from "./employee/employee.component";
import {AuthGuard} from "./auth/auth-guard";
import {ManagerComponent} from "./manager/manager.component";
import {AuthModule} from "./auth/auth.module";
import {MatCardModule} from "@angular/material/card";
import {NgbAlertModule, NgbModule, NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'manager',
    component: ManagerComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['manager']
    }
  },
  {
    path: 'employee',
    component: EmployeeComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['employee']
    }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    KeycloakAngularModule,
    HttpClientModule,
    AuthModule,
    MatCardModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
