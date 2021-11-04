import { Component, OnInit } from '@angular/core';
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  role: any;

  constructor(private keycloak: KeycloakService) { }

  ngOnInit(): void {
    this.role = this.keycloak.getUserRoles();
  }

}
