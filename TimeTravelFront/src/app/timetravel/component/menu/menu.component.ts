import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientGuardService } from '../../guard/client-guard.service';
import { Client } from '../../model/client';
import { AuthenticationService } from '../../service/authentication.service';
import { ClientService } from '../../service/client.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {

  constructor(
    private authSrv: AuthenticationService,
    private clientSrv: ClientService,
    private router: Router
  ) {}

  ngOnInit(): void {

  }

  logoff() {
    sessionStorage.clear();
    this.router.navigateByUrl('/home');
  }

  get admin() {
    return this.authSrv.isAdmin();
  }

  get client() {
    return this.authSrv.isClient();
  }

  get anonymous() {
    return !this.authSrv.isAuthenticated();
  }

  get authenticated() {
    return this.authSrv.isAuthenticated();
  }
}
