import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { User } from './../auth/common/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userList = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.readList();
  }

  readList() {
    this.http.get('http://localhost:3000/users2/',
      { headers: new HttpHeaders().set('Authorization', 'Bearer ' + JSON.parse(sessionStorage['currentUser'])['token'])})
      .subscribe(data => {
        let counter = 0;
        this.userList = [];
        while (data[counter] != null) {
          this.userList.push({
            _id: data[counter]['_id'],
            email: data[counter]['email'],
            firstName: data[counter]['firstName'],
            lastName: data[counter]['lastName'],
            role: data[counter]['role']
          });
          counter++;
        }
      });
  }

  deleteUser(user) {
    this.http.delete('http://localhost:3000/users2/' + user._id)
      .subscribe(data => {
        this.readList();
      });
  }
}