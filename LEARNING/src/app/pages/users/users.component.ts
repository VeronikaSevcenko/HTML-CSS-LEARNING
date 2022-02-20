import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$?: Observable<User[]>;
  columnTitles = [
    'ID',
    'Name',
    'Username'
  ];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.users$ = this.userService.getUsers();
  }

  navigate(id: number): void {
    this.router.navigate(['/users', id]).then();
  }
}
