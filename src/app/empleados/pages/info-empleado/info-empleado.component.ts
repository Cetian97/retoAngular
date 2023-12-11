import { Component, NgModule, inject } from '@angular/core';
import { EmpleadosServiceService } from '../../services/empleados-service.service';
import { empleado } from '../../interfaces/empleado';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-info-empleado',
  standalone: true,
  imports: [CurrencyPipe, RouterModule],
  templateUrl: './info-empleado.component.html',
  styleUrl: './info-empleado.component.css'
})
export class InfoEmpleadoComponent {
  
  private _servicioEmpleado =inject(EmpleadosServiceService);
  public empSeleccionado!: empleado;

  constructor(private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    
      this.ruta.params.subscribe(({id})=>{
        this.buscarEmpleado(id);
      })
  }

  buscarEmpleado(idEmpleado: number): void{
    this.empSeleccionado = this._servicioEmpleado.getEmps().filter(obj => {
      return obj.id == idEmpleado;
    })[0];
    console.log("Aqui");
    console.log(this._servicioEmpleado.getEmps());
    
  }
}
