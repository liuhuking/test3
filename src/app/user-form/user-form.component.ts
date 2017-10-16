import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user = {};
  id = this.route.snapshot.paramMap.get('id');
  title = "";
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private location: Location,
    private router: Router
  ) { 
    if(!this.id){
      this.title = "New User";
    }else{
      this.title = "Edit User";
    }
  }

  ngOnInit() {
    this.http.get("http://localhost:3000/users2/" + this.id).subscribe(data => {
      if(data){
        this.user['_id'] = data['_id'];
        this.user['email'] = data['email'];
        this.user['firstName'] = data['firstName'];
        this.user['lastName'] = data['lastName'];
        this.user['role'] = data['role'];
      }else{
        this.router.navigate(['/user']);
      }
    });
  }

  onSubmit() {
    this.submitted = true;
    this.http.put('http://localhost:3000/users2/' + this.id, this.user).subscribe(data => {
      this.router.navigate(['/user']);
    });
  }
}