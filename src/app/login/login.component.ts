import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'prac-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.email === 'admin@gmail.com' && this.password === 'Admin')
      this.router.navigateByUrl('/rooms/add');
  }
}
