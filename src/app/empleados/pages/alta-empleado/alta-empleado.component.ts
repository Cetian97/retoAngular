import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { EmpleadosServiceService } from '../../services/empleados-service.service';
import { empleado } from '../../interfaces/empleado';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-alta-empleado',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './alta-empleado.component.html',
  styleUrl: './alta-empleado.component.css'
})
export class AltaEmpleadoComponent {

  protected formulario: FormGroup = this._fb.group({
    nomEmp: ['',[Validators.required]],
    salEmp: [15120,[Validators.required,Validators.min(15120)]],
    edadEmp: [18,[Validators.required,Validators.min(18),Validators.max(65)]],
    imgEmp: ['']
  });

  private _servicioEmpleado =inject(EmpleadosServiceService);

  constructor(private _fb: FormBuilder) { }

  validacionCampo (campo: string): boolean | null {
    return this.formulario.controls[campo].errors && this.formulario.controls[campo].touched;
  }

  altaUsuario(): void {

    const {nomEmp, salEmp, edadEmp, imgEmp} = this.formulario.value;

    const empleado: empleado = {
      employee_name: nomEmp,
      employee_age: edadEmp,
      employee_salary: salEmp,
      profile_image: imgEmp
    }

    console.log(empleado);

    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    this._servicioEmpleado.createEmpleado(empleado).subscribe(
      {
        next:(respuesta)=>{
          Swal.fire({
            title: "Usuario dado de alta",
            text: "El usuario ha sido dado de alta con éxito"
          });
        },
        error: (error) => {
          console.log(error);
          Swal.fire({
            title: 'Error',
            text: 'Se ha producido el siguiente error tipo ' + error.name + ": " + error.message + ' consulte con el administrador de la aplicación.',
            icon: 'error',
            confirmButtonText: 'Aceptar'
          });
        },
      }
    );

    this.formulario.reset();
  }

}
