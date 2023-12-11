import { Component, Input, inject } from '@angular/core';
import { EmpleadosServiceService } from '../../services/empleados-service.service';
import { empleado } from '../../interfaces/empleado';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {

  @Input("empleados") listaEmpleados!: empleado[];

  constructor(private ruta: Router) { }

  ngOnInit(): void {
    // this.getEmpleados();
    
  }

}
