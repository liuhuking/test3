import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  featureList = [];
  user = JSON.parse(sessionStorage.getItem('currentUser'));

  constructor(private http: HttpClient) {
    if(this.user){
      if(this.user['role'] == 'Admin'){
        this.featureList['user'] = true;
      }
    }
    
    if(sessionStorage.getItem('currentUser')){
      this.featureList['logout'] = true;
      this.featureList['task'] = true;
    }else{
      this.featureList['login'] = true;
      this.featureList['register'] = true;
    }
  }
}
