import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { routes } from './routes';
import { HomeComponent } from './timetravel/component/home/home.component';
import { NotFoundComponent } from './timetravel/component/not-found/not-found.component';
import { LoginComponent } from './timetravel/component/login/login.component';
import { MenuComponent } from './timetravel/component/menu/menu.component';
import { VoyageCoComponent } from './timetravel/component/voyage/voyage-co/voyage-co.component';
import { InscriptionComponent } from './timetravel/component/client/inscription/inscription.component';
import { ProblemeAdminComponent } from './timetravel/component/probleme-admin/probleme-admin.component';
import { AuthenticationInterceptor } from './timetravel/interceptor/authentication.interceptor';
import { VoyageListComponent } from './timetravel/component/admin/voyage/voyage-list/voyage-list.component';
import { VoyageEditComponent } from './timetravel/component/admin/voyage/voyage-edit/voyage-edit.component';
import { MachineEditComponent } from './timetravel/component/admin/machine/machine-edit/machine-edit.component';
import { MachineListComponent } from './timetravel/component/admin/machine/machine-list/machine-list.component';
import { CatalogueComponent } from './timetravel/component/catalogue/catalogue.component';
import { AchatVoyageComponent } from './timetravel/component/client/achat-voyage/achat-voyage.component';
import { AchatPassagerComponent } from './timetravel/component/client/achat-passager/achat-passager.component';
import { ReservationComponent } from './timetravel/component/client/reservation/reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    MenuComponent,
    VoyageCoComponent,
    InscriptionComponent,
    ProblemeAdminComponent,
    VoyageListComponent,
    VoyageEditComponent,
    MachineEditComponent,
    MachineListComponent,
    CatalogueComponent,
    AchatVoyageComponent,
    AchatPassagerComponent,
    ReservationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
