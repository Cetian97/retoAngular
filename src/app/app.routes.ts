import { Routes } from '@angular/router';
import { HomeComponent } from './empleados/home/home.component';
import { InfoEmpleadoComponent } from './empleados/pages/info-empleado/info-empleado.component';
import { AltaEmpleadoComponent } from './empleados/pages/alta-empleado/alta-empleado.component';

export const routes: Routes = [
    {
        path: 'empleados',
        // loadComponent:()=> import('./empleados/home/home.component').then(c=>HomeComponent),
        children: [
            {
                path: 'infoEmpleado/:id',
                title: 'Información detallada del empleado',
                loadComponent:()=> import('./empleados/pages/info-empleado/info-empleado.component').then(c=>InfoEmpleadoComponent)
            },
            {
                path: 'altaEmpleado',
                title: 'Alta del empleado',
                loadComponent:()=> import('./empleados/pages/alta-empleado/alta-empleado.component').then(c=>AltaEmpleadoComponent)
            },
            {
                path: '',
                title: 'Tabla empleados',
                loadComponent:()=> import('./empleados/home/home.component').then(c=>HomeComponent),
            },
        ]
    },
    {
        path: '',
        redirectTo: '/empleados',
        pathMatch: 'full'
    }

];


