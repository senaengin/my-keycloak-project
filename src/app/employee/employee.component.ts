import { Component, OnInit } from '@angular/core';
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  role: any;

  constructor(private keycloak: KeycloakService) { }

  ngOnInit(): void {
    this.role = this.keycloak.getUserRoles();
  }

}
