import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'address-form',
        loadComponent: () => import('./address-form/address-form.component').then(m => m.AddressFormComponent)
    }
];
