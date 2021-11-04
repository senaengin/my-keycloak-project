import { Component, OnInit } from '@angular/core';
import {KeycloakService} from "keycloak-angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userName: any;

  constructor(private keycloakService: KeycloakService,
              private router: Router) { }

  ngOnInit(): void {
    this.userName = this.keycloakService.getUsername();
  }

  managerLogin(){
    this.router.navigate(['/manager']);
  }

  employeeLogin(){
    this.router.navigate(['/employee'])
  }

  logout(){
    this.keycloakService.logout();
  }

}
