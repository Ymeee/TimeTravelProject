import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { ClientService } from 'src/app/timetravel/service/client.service';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/timetravel/service/authentication.service';
import { Client } from 'src/app/timetravel/model/client';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
})
export class InscriptionComponent implements OnInit {
  form!: FormGroup;
  login: string = '';
  password: string = '';
  error = false;

  constructor(
    private clientService: ClientService,
    private router: Router,
    private authSrv: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      numero: new FormControl(),
      rue: new FormControl(),
      cp: new FormControl(),
      ville: new FormControl(),
      pays: new FormControl(),
      anniversaire: new FormControl('', Validators.required),
      tel: new FormControl('', Validators.required),
      mail: new FormControl(
        '',
        [Validators.required, Validators.email],
        this.mailNotExists()
      ),
      groupeInfo: new FormGroup({
        prenom: new FormControl('', Validators.required),
        nom: new FormControl('', Validators.required),
        login: new FormControl('', Validators.required, this.loginNotExists()),
        groupePassword: new FormGroup(
          {
            password: new FormControl(
              '',
              Validators.pattern(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@*!-_])([a-zA-Z0-9@*!-_]{4,25})$/
              )
            ),
            confirmation: new FormControl(),
          },
          this.passwordAndConfirmationEquals
        ),
      }),
    });
  }

  mailNotExists(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.clientService.checkMailExists(control.value).pipe(
        map((bool) => {
          return bool ? { mailExists: true } : null;
        })
      );
    };
  }

  loginNotExists(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.clientService.checkLoginExists(control.value).pipe(
        map((bool) => {
          return bool ? { loginExists: true } : null;
        })
      );
    };
  }

  passwordAndConfirmationEquals(
    control: AbstractControl
  ): ValidationErrors | null {
    let password = control.get('password');
    if (password?.invalid) {
      return null;
    }
    return password?.value == control.get('confirmation')?.value
      ? null
      : { passwordAndConfirmationNotEquals: true };
  }

  save() {
    let client = {
      prenom: this.form.get('groupeInfo.prenom')?.value,
      nom: this.form.get('groupeInfo.nom')?.value,
      anniversaire: this.form.get('anniversaire')?.value,
      mail: this.form.get('mail')?.value,
      tel: this.form.get('tel')?.value,
      login: this.form.get('groupeInfo.login')?.value,
      password: this.form.get('groupeInfo.groupePassword.password')?.value,
    };
    if (
      this.form.get('numero')?.value ||
      this.form.get('rue')?.value ||
      this.form.get('cp')?.value ||
      this.form.get('ville')?.value ||
      this.form.get('pays')?.value
    ) {
      Object.assign(client, {
        adresse: {
          numero: this.form.get('numero')?.value,
          rue: this.form.get('voie')?.value,
          cp: this.form.get('cp')?.value,
          ville: this.form.get('ville')?.value,
          pays: this.form.get('pays')?.value,
        },
      });
    }
    this.clientService.inscription(client).subscribe(() => {
      this.router.navigateByUrl('/login');
    });
  }

}
