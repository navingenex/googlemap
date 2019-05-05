import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  latitude = -28.68352;
  longitude = -147.20785;
  lat;
  long;
  maptype = "satellite"
  setMapType(mapTypeId: string) {
    this.maptype = mapTypeId;
  }
  ngOnInit() {

  }

  setCenter() {
    this.latitude = parseInt(this.lat);
    this.longitude = parseInt(this.long);
  }
}
