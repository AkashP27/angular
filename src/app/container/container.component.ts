import { ThisReceiver } from '@angular/compiler';
import {
  AfterContentInit,
  Component,
  ContentChild,
  OnInit,
} from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'prac-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit, AfterContentInit {
  @ContentChild(EmployeeComponent) employeeComponent!: EmployeeComponent;

  ngAfterContentInit(): void {
    this.employeeComponent.employeeName = 'Devon';
  }
  ngOnInit(): void {}
}
