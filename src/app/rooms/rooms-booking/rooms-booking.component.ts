import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'prac-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.css'],
})
export class RoomsBookingComponent {
  // id: number = 0;
  id$ = this.router.paramMap.pipe(map((params) => params.get('roomID')));

  constructor(private router: ActivatedRoute) {
    // this.router.params.subscribe((params) => console.log(params['roomID']));
    // this.router.paramMap.subscribe((params) => console.log(params.get('roomID)));
  }
}
