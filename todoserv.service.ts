import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class TodoservService {
  public employees=[
    {"name":"Mr XYZ","id":123,"dept":"CSE"},
    {"name":"Mr PQR","id":456,"dept":"ECE"},
    {"name":"Mr ABC","id":789,"dept":"CE"}
  ]
getEmployee(){
  return this.employees
}

  constructor(private http:HttpClient) { 

  }
  getUserData(){
    let apiurl="https://api.spacexdata.com/v3/missions";
    return this.http.get(apiurl);
  }
}
