import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Users } from '../models/users/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  // name ="fah";
  public name!: String;
  public heroes!: String[];
  public userList: Users[] = [];
  // public usr!: String;

  constructor(
    private http: HttpClient) {}

  ngOnInit(): void {
    this.name = "fah";
    this.heroes = ["Ironman", "Captain America", "Thor", "Hulk"];
    this.http.get<Users[]>('https://jsonplaceholder.typicode.com/albums').subscribe(res=>{
      console.log('res',res);
      // this.usr = JSON.stringify(res);
      this.userList = res;
    })
  }

  addHeroes(this: any, hero: String) {
    this.heroes.unshift(hero);
    return false;
  }

  onChange(response: string){
    console.log(response);
  }

}
