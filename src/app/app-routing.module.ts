import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared';

const routes: Routes = [
    { path: '', loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuard] },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'services-trace', loadChildren: './services-trace/services-trace.module#ServicesTraceModule' },
    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: 'all-services', loadChildren: './all-services/all-services.module#AllServicesModule' },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
