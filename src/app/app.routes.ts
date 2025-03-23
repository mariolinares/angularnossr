import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
    },
    {
        path: 'address-form',
        loadComponent: () => import('./address-form/address-form.component').then(m => m.AddressFormComponent)
    }
];
