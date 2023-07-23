import { Component } from '@angular/core';

@Component({
  selector: 'prac-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent {
  hotelName = 'Taj Hotel';
  numberOfRooms = 100;

  hideRooms = false;

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
