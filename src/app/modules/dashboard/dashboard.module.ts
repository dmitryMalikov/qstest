import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
    imports: [
        DashboardRoutingModule,
        RouterModule
    ],
    declarations: [DashboardComponent]
})
export class DashboardModule {}
