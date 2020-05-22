import {Component, OnInit} from '@angular/core';
import {LocationService} from './location.service';
import {Location} from './location';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'location-client';
  message: any;

  location: Location = new Location(0, 0, 0);
  constructor(private service: LocationService) {
  }
  ngOnInit() {
  }

  public registerLocationNow(){
  const response = this.service.createLocation(this.location);
  response.subscribe((data) => this.message = data);

  }
}
