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
          'Basic ' + window.btoa(this.login + ':' + this.password)
        );
        console.log(data)
        if (data.role == 'ROLE_Client') {
          let client = new Client(
            data.id,
            data.login,
            data.nom,
            data.prenom,
            data.anniversaire,
            data.mail,
            data.adresse,
            data.tel
          );
          sessionStorage.setItem('client', JSON.stringify(client));
          sessionStorage.setItem('role', 'Client');
          sessionStorage.setItem('client', JSON.stringify(data.login));
          sessionStorage.setItem('idClient', JSON.stringify(data.id));
        } else {
          sessionStorage.setItem('role', 'Admin');
        }
        this.router.navigateByUrl('/home');
      },
      error: (err) => {
        this.error = true;
      },
    });
  }
}
