import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'prac-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit {
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;

  ngAfterViewInit(): void {
    this.headerComponent.title = 'Rooms View';
    console.log(this.headerChildrenComponent);
  }

  ngDoCheck(): void {
    console.log('calling ngDoCheck');
  }

  hotelName = 'Taj Hotel';
  numberOfRooms = 100;

  title = 'Room Lists';

  hideRooms = false;

  rooms: Room = {
    totalRooms: 100,
    availableRooms: 10,
    bookedRooms: 8,
  };

  roomsList: RoomList[] = [];

  selectedRooms!: RoomList;

  ngOnInit(): void {
    // console.log(this.headerComponent);
    this.roomsList = [
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
  }

  addRoom() {
    const room: RoomList = {
      roomType: 'Semi Private',
      amenities: 'AC',
      price: 400,
      checkinTime: new Date(),
      checkoutTime: new Date(),
    };

    // this.roomsList.push(room);
    this.roomsList = [...this.roomsList, room];
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'List Room';
  }

  selectsRoom(room: RoomList) {
    this.selectedRooms = room;
  }
}
