import { Routes } from '@angular/router';
import { VoyageEditComponent } from './timetravel/component/admin/voyage/voyage-edit/voyage-edit.component';
import { VoyageListComponent } from './timetravel/component/admin/voyage/voyage-list/voyage-list.component';
import { InscriptionComponent } from './timetravel/component/client/inscription/inscription.component';
import { HomeComponent } from './timetravel/component/home/home.component';
import { LoginComponent } from './timetravel/component/login/login.component';
import { NotFoundComponent } from './timetravel/component/not-found/not-found.component';
import { ProblemeAdminComponent } from './timetravel/component/probleme-admin/probleme-admin.component';
import { VoyageCoComponent } from './timetravel/component/voyage/voyage-co/voyage-co.component';
import { AdminGuardService } from './timetravel/guard/admin-guard.service';
import { AnonymousGuardService } from './timetravel/guard/anonymous-guard.service';

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
    path: 'client/inscription',
    component: InscriptionComponent,
    canActivate: [AnonymousGuardService],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AnonymousGuardService],
  },





  {
    path: 'probleme/admin',
    component: ProblemeAdminComponent,
    canActivate: [AdminGuardService],
  },

  { path: '**', component: NotFoundComponent },
];
