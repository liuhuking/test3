import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { User } from '../common/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  submitted = false;
  message: String;

  constructor(private http: HttpClient, private router: Router) {
    this.user = new User("", "", "", "");
    this.message = "";
  }

  ngOnInit() {
    if(sessionStorage){
      this.router.navigate(['/task']);
    }
  }

  onSubmit() {
    this.submitted = true;
    this.http.post('http://localhost:3000/users2/authenticate', this.user).subscribe(data => {
      if (data['token']) {
        sessionStorage.setItem('currentUser', JSON.stringify(data));
        location.reload();
        this.router.navigate(['/task']);
      }
    });
  }
}