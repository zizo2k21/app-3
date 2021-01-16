import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarDashboardComponent } from './navbar-dashboard/navbar-dashboard.component';
import { SidebarDashboardComponent } from './sidebar-dashboard/sidebar-dashboard.component';
import { CounterDashboardComponent } from './counter-dashboard/counter-dashboard.component';
import { QrDashboardComponent } from './qr-dashboard/qr-dashboard.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { ListDemandComponent } from './list-demand/list-demand.component';

import { DataTablesModule } from 'angular-datatables';
import { ListDemandCComponent } from './list-demand-c/list-demand-c.component';
import { ListDemandNcComponent } from './list-demand-nc/list-demand-nc.component';
import { StatDemandComponent } from './stat-demand/stat-demand.component';
import { PayListComponent } from './pay-list/pay-list.component';
import { PayStatComponent } from './pay-stat/pay-stat.component';
import { SickListComponent } from './sick-list/sick-list.component';
=======

>>>>>>> 60ee11319f665b6301a0e3955450283da0c127e7


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DashboardComponent,
    NavbarDashboardComponent,
    SidebarDashboardComponent,
    CounterDashboardComponent,
    QrDashboardComponent,
<<<<<<< HEAD
    SignUpComponent,
    ListDemandComponent,
    ListDemandCComponent,
    ListDemandNcComponent,
    StatDemandComponent,
    PayListComponent,
    PayStatComponent,
    SickListComponent
=======
    SignUpComponent
>>>>>>> 60ee11319f665b6301a0e3955450283da0c127e7
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    FormsModule,
    DataTablesModule
=======
    FormsModule
>>>>>>> 60ee11319f665b6301a0e3955450283da0c127e7
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
