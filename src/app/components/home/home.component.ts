import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Users } from '../../models/Users';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  users: Users[];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      console.log(users);
    });
  }
}
