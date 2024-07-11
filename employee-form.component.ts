import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  employeeForm: FormGroup;

  constructor(private fb: FormBuilder, private employeeService: EmployeeService) {
    this.employeeForm = this.fb.group({
      name: [''],
      salary: [''],
      age: ['']
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.employeeService.createEmployee(this.employeeForm.value).subscribe(() => {
      // Refresh the employee list or handle success response
    });
  }
}
