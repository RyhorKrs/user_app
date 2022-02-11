import { Component, OnInit } from '@angular/core';

import { MockUser } from '../shared/constants/constants';
import { UserGender } from '../shared/enums/enums';
import { User } from '../shared/interfaces/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'] 
})
export class UserCardComponent implements OnInit {
  public currentUser: User = MockUser;
  public currentUserGender: string = 'male';

  ngOnInit(): void {
    this.currentUserGender = this.currentUser.gender;
  }
}
