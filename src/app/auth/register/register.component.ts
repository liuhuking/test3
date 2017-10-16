import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = {};
  submitted = false;

  constructor(private http : HttpClient, private router : Router) { 
    this.user = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      role: "Guest"
    };
  }

  ngOnInit() {
  }
  
  onSubmit() {
    this.submitted = true;
    this.http.post('http://localhost:3000/users2/register', this.user).subscribe(data => {
      this.router.navigate(['/login']);
    });
  }
}
