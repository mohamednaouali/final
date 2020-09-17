import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesTraceComponent } from './services-trace.component';

describe('ServicesTraceComponent', () => {
    let component: ServicesTraceComponent;
    let fixture: ComponentFixture<ServicesTraceComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ServicesTraceComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ServicesTraceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
