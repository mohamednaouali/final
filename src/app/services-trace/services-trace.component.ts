import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../router.animations';


@Component({
    selector: 'app-services-trace',
    templateUrl: './services-trace.component.html',
    styleUrls: ['./services-trace.component.scss'],
    animations: [routerTransition()]

})


export class ServicesTraceComponent implements OnInit {


    ngOnInit(): void {

    }



}
