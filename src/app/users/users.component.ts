import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { UserDetailsService } from './../user-details.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(private userDetailsService: UserDetailsService) {}
  users: Users;
  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userDetailsService.getUsers().subscribe((data) => {
      console.log(Array.isArray(data));
      console.log(data instanceof Array);
      this.users = data.splice(0,10);
    });
  }
}
