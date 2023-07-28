import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'prac-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private loginService: LoginService) {}

  login() {
    if (this.loginService.login(this.email, this.password)) {
      this.router.navigateByUrl('/rooms/add');
    }
  }
}
