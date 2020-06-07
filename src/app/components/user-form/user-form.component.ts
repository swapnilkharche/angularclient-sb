import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user: User;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService) { 
      this.user= new User();
    }

    onSubmit() {
      this.userService.save(this.user).subscribe(result => this.gotoUserList());
    }
   
    gotoUserList() {
      this.router.navigate(['/adduser']);
    }

  ngOnInit() {
  }

}
