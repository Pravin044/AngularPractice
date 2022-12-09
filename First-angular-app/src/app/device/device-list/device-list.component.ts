import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent  implements OnInit{
  constructor(private route:ActivatedRoute){}
  ngOnInit(): void {
    console.log(this.route.snapshot.data['device']);
    
  }

}
