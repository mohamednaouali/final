import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesTraceRoutingModule } from './services-trace-routing.module';
import {ServicesTraceComponent} from './services-trace.component';
import {PageHeaderModule} from '../shared/modules';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
    imports: [CommonModule, ServicesTraceRoutingModule, PageHeaderModule, HttpClientModule],
    declarations: [ServicesTraceComponent]
})
export class ServicesTraceModule { }
