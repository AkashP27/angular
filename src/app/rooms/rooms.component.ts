import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'prac-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent {
  hotelName = 'Taj Hotel';
  numberOfRooms = 100;

  hideRooms = false;

  rooms: Room = {
    totalRooms: 100,
    availableRooms: 10,
    bookedRooms: 8,
  };

  roomsList: RoomList[] = [
    {
      roomType: 'Deluxe Room',
      amenities: 'AC, WIFI, TV',
      price: 10000,
      checkinTime: new Date(),
      checkoutTime: new Date(),
    },
    {
      roomType: ' Semi Deluxe Room',
      amenities: 'AC, WIFI',
      price: 5000,
      checkinTime: new Date(),
      checkoutTime: new Date(),
    },
    {
      roomType: 'Normal Room',
      amenities: 'WIFI',
      price: 1000,
      checkinTime: new Date(),
      checkoutTime: new Date(),
    },
  ];

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
