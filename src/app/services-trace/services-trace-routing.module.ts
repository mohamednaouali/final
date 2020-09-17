import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ServicesTraceComponent} from './services-trace.component';

const routes: Routes = [


    {
        path: '',
        component: ServicesTraceComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ServicesTraceRoutingModule { }
