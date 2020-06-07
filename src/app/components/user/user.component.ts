import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user-service.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];

  constructor(private service: UserService) { }

  ngOnInit() {
    this.service.findAll().subscribe( data => {
      console.log('users' + data.toString());
      this.users = data;     
      console.log('this.users' + this.users);
    });
  }

}
