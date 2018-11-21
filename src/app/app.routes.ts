import { Routes } from '@angular/router';
import { AppRootMainComponent } from './core/app-root-main/app-root-main.component';
import { AppRootAuxComponent } from './core/app-root-aux/app-root-aux.component';
import { AuthGuardLazy } from './shared/auth/auth-guard-lazy.service';
import { AuthGuardLoginLazy } from './shared/auth/auth-guard-lazy-login.service';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuardEager } from './shared/auth/auth-guard-eager.service';

export const AppRoutes: Routes = [
    { path: '', redirectTo: 'customer/customer-list', pathMatch: 'full' },
    {
        path: '',
        canActivate: [AuthGuardEager],
        component: AppRootMainComponent,
        children: [
            { path: 'customer', loadChildren: './components/customer/customer.module#CustomerModule', canLoad: [AuthGuardLazy]},
            { path: 'user', loadChildren: './components/user/user.module#UserModule', canLoad: [AuthGuardLazy]},
            { path: 'suppliers', loadChildren: './components/suppliers/suppliers.module#SuppliersModule', canLoad: [AuthGuardLazy]},
            { path: 'products', loadChildren: './components/products/products.module#ProductsModule', canLoad: [AuthGuardLazy]},
            { path: 'categories', loadChildren: './components/categories/categories.module#CategoriesModule', canLoad: [AuthGuardLazy]},
            { path: 'shipment-sources', loadChildren: './components/shipment-sources/shipment-sources.module#ShipmentSourcesModule', canLoad: [AuthGuardLazy]},
            { path: 'shipment-types', loadChildren: './components/shipment-types/shipment-types.module#ShipmentTypesModule', canLoad: [AuthGuardLazy]},
            { path: 'warehouses', loadChildren: './components/warehouses/warehouses.module#WarehousesModule', canLoad: [AuthGuardLazy]},
            { path: 'employees', loadChildren: './components/employees/employees.module#EmployeesModule', canLoad: [AuthGuardLazy]},
            { path: 'containers', loadChildren: './components/containers/containers.module#ContainersModule', canLoad: [AuthGuardLazy]},
            { path: 'bank-account', loadChildren: './components/bank-account/bank-account.module#BankAccountModule', canLoad: [AuthGuardLazy]},
            { path: 'packagings', loadChildren: './components/packagings/packagings.module#PackagingsModule', canLoad: [AuthGuardLazy]},
        ]
    },
    {
        path: '',
        component: AppRootAuxComponent,
        children: [
            { path: 'auth', loadChildren: './components/auth/auth.module#AuthModule', canLoad: [AuthGuardLoginLazy]},
        ]
    },
    {
        path: 'not-found',
        component: NotFoundComponent,
    },
    {
        path: '**', redirectTo: '/not-found'
    }
];
