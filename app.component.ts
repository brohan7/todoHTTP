import { Component } from '@angular/core';
import { TodoservService } from './todoserv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  userData:any=[]
constructor(private todo:TodoservService){
  this.todo.getUserData().subscribe(data=>{
    console.log(data);
    this.userData=data;
  });

}
}
