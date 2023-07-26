import { Component } from '@angular/core';
import { RoomList } from '../rooms';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'prac-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.css'],
})
export class RoomsAddComponent {
  constructor(private roomsService: RoomsService) {}

  successMessage: string = '';

  room: RoomList = {
    roomType: '',
    amenities: '',
    price: 0,
    photos: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    rating: 0,
  };

  AddRoom() {
    this.roomsService.addRoom(this.room).subscribe((data) => {
      this.successMessage = 'Room added successfully';
    });
  }
}
