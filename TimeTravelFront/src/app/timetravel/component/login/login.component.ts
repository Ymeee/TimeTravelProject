import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../../model/client';
import { AuthenticationService } from '../../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login: string = '';
  password: string = '';
  error = false;

  constructor(private authSrv: AuthenticationService, private router: Router) {}

  ngOnInit(): void {}

  send() {
    this.authSrv.authentication(this.login, this.password).subscribe({
      next: (data) => {
        this.error = false;
        sessionStorage.setItem(
          'token',
          'Basic' + btoa(this.login + ':' + this.password)
        );
        if (data.role == 'ROLE_Client') {
          let client = new Client(
            data.client.id,
            data.client.login,
            data.client.nom,
            data.client.prenom,
            data.client.anniversaire,
            data.client.mail,
            data.client.adresse,
            data.client.tel,
          );
          sessionStorage.setItem('client', JSON.stringify(client));
          sessionStorage.setItem('role', 'client');
          sessionStorage.setItem('client', JSON.stringify(data.login));
        } else {
          sessionStorage.setItem('role', 'admin');
        }
        this.router.navigateByUrl('/home');
      },
      error: (err) => {
        this.error = true;
      },
    });
  }
}
