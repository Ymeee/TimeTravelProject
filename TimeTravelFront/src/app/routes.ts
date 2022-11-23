import { Routes } from '@angular/router';
import { MachineEditComponent } from './timetravel/component/admin/machine/machine-edit/machine-edit.component';
import { MachineListComponent } from './timetravel/component/admin/machine/machine-list/machine-list.component';
import { VoyageEditComponent } from './timetravel/component/admin/voyage/voyage-edit/voyage-edit.component';
import { VoyageListComponent } from './timetravel/component/admin/voyage/voyage-list/voyage-list.component';
import { CatalogueComponent } from './timetravel/component/catalogue/catalogue.component';
import { AchatPassagerComponent } from './timetravel/component/client/achat-passager/achat-passager.component';
import { AchatVoyageComponent } from './timetravel/component/client/achat-voyage/achat-voyage.component';
import { InscriptionComponent } from './timetravel/component/client/inscription/inscription.component';
import { ReservationComponent } from './timetravel/component/client/reservation/reservation.component';
import { ValidationReservationComponent } from './timetravel/component/client/validation-reservation/validation-reservation.component';
import { HomeComponent } from './timetravel/component/home/home.component';
import { LoginComponent } from './timetravel/component/login/login.component';
import { NotFoundComponent } from './timetravel/component/not-found/not-found.component';
import { ProblemeAdminComponent } from './timetravel/component/probleme-admin/probleme-admin.component';
import { VoyageCoComponent } from './timetravel/component/voyage/voyage-co/voyage-co.component';
import { AdminGuardService } from './timetravel/guard/admin-guard.service';
import { AnonymousGuardService } from './timetravel/guard/anonymous-guard.service';
import { ClientGuardService } from './timetravel/guard/client-guard.service';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'voyage/co', component: VoyageCoComponent },
  {
    path: 'voyage',
    component: VoyageListComponent,
    canActivate: [AdminGuardService],
  },
  {
    path: 'voyage/edit',
    component: VoyageEditComponent,
    canActivate: [AdminGuardService],
  },
  {
    path: 'voyage/edit/:id',
    component: VoyageEditComponent,
    canActivate: [AdminGuardService],
  },
  {
    path: 'machine',
    component: MachineListComponent,
    canActivate: [AdminGuardService],
  },
  {
    path: 'machine/edit',
    component: MachineEditComponent,
    canActivate: [AdminGuardService],
  },
  {
    path: 'machine/edit/:id',
    component: MachineEditComponent,
    canActivate: [AdminGuardService],
  },
  {
    path: 'client/inscription',
    component: InscriptionComponent,
    canActivate: [AnonymousGuardService],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AnonymousGuardService],
  },

  { path: 'catalogue', component: CatalogueComponent },

  {
    path: 'voyage/:id',
    component: AchatVoyageComponent,
    canActivate: [ClientGuardService]
  },

  {
    path: 'voyage/:id/passager',
    component: AchatPassagerComponent,
    canActivate: [ClientGuardService]
  },

  {
    path: 'reservation',
    component: ReservationComponent,
    canActivate: [ClientGuardService]
  },
  {
    path: 'reservation/validation',
    component: ValidationReservationComponent,
    canActivate: [ClientGuardService],
  },

  {
    path: 'probleme/admin',
    component: ProblemeAdminComponent,
    canActivate: [AdminGuardService],
  },

  { path: '**', component: NotFoundComponent },
];
