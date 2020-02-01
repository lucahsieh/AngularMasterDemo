import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/core/service/city/city.service';
import { City } from 'src/app/shared/model/city';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  id = 6173331;
  citylist: City[];

  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.citylist = [];
    this.cityService.getCities().subscribe(l => {
      this.citylist = l;
      console.log(l);
    })
  }

}
