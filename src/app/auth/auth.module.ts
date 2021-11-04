import {APP_INITIALIZER, NgModule} from "@angular/core";
import {initializer} from "../app-init";
import {AuthGuard} from "./auth-guard";
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";

@NgModule({
  declarations: [],
  imports: [KeycloakAngularModule],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initializer,
    multi: true,
    deps: [KeycloakService]
  },
    AuthGuard
  ]
})
export class AuthModule {}
