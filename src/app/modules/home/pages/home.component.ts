import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/core/service/city/city.service';
import { City } from 'src/app/shared/model/city';
import { UserService } from 'src/app/core/service/user.service';
import { User } from 'src/app/shared/model/user';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loading = false;
  users: User[];
  id = 6173331;
  citylist: City[];

  constructor(
    private cityService: CityService,
    private userService: UserService) { }

  ngOnInit() {
    this.loading = true;
    this.citylist = [];
    this.cityService.getCities().subscribe(l => {
      this.citylist = l;
      console.log(l);
    });
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.loading = false;
      this.users = users;
    });
  }

}
