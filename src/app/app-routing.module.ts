import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
<<<<<<< HEAD
import { ListDemandComponent } from './list-demand/list-demand.component';
import { ListDemandCComponent } from './list-demand-c/list-demand-c.component';
import { ListDemandNcComponent } from './list-demand-nc/list-demand-nc.component';
import { StatDemandComponent } from './stat-demand/stat-demand.component';
import { PayListComponent } from './pay-list/pay-list.component';
import { PayStatComponent } from './pay-stat/pay-stat.component';
import { SickListComponent } from './sick-list/sick-list.component';

=======
>>>>>>> 60ee11319f665b6301a0e3955450283da0c127e7

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
<<<<<<< HEAD
  },
  {
    path: 'list-demand',
    component: ListDemandComponent
  },
  {path:'list-demand-c',
    component:ListDemandCComponent
  },
  {path:'list-demand-nc',
    component:ListDemandNcComponent
  },
  {path:'stat-demand',
    component:StatDemandComponent
  },
  {path:'pay-list',
    component:PayListComponent
  },
  {path:'pay-stat',
    component:PayStatComponent
  },
  {path:'sick-list',
    component:SickListComponent
  }
];


=======
  }
];

>>>>>>> 60ee11319f665b6301a0e3955450283da0c127e7
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
