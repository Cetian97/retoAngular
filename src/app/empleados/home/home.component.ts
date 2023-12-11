import { Component, inject } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { EmpleadosServiceService } from '../services/empleados-service.service';
import { TablaComponent } from '../components/tabla/tabla.component';
import { empleado } from '../interfaces/empleado';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, TablaComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public emps!: empleado[];

  private _servicioEmpleado =inject(EmpleadosServiceService);

  constructor() { }

  ngOnInit(): void {
    this.getEmpleados();
    
  }

  getEmpleados(): void {
    this._servicioEmpleado.findAllEmpleados().subscribe(resp => {
      this.emps = resp.data;
      console.log(this.emps);
      this._servicioEmpleado.setEmps(this.emps);
    })
  }

}
