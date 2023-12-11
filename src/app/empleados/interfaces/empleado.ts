export interface RESTEmpleados {
    status:  string;
    data:    empleado[];
    message: string;
}

export interface empleado {
    id?:              number;
    employee_name:   string;
    employee_salary: number;
    employee_age:    number;
    profile_image:   string;
}

