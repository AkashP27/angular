import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomList } from './rooms';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'prac-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsComponent
  implements OnInit, DoCheck, AfterViewInit, OnDestroy
{
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;

  hotelName = 'Taj Hotel';
  numberOfRooms = 100;

  title = 'Room Lists';

  hideRooms = true;

  rooms: Room = {
    totalRooms: 100,
    availableRooms: 10,
    bookedRooms: 8,
  };

  roomsList: RoomList[] = [];

  selectedRooms!: RoomList;

  stream = new Observable((observer) => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();
    // observer.error('error');
  });

  constructor(private roomsService: RoomsService) {}

  subscription!: Subscription;

  rooms$ = this.roomsService.getRooms$;

  ngOnInit(): void {
    // console.log(this.headerComponent);
  }

  ngAfterViewInit(): void {
    this.roomsService.getPhotos().subscribe((data) => {
      console.log(data);
    });

    // this.stream.subscribe((data) => {
    //   console.log(data);
    // });
    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('complete'),
      error: (err) => console.log(err),
    });
    // this.subscription = this.roomsService.getRooms$.subscribe((rooms) => {
    //   this.roomsList = rooms;
    // });
    this.headerComponent.title = 'Rooms View';
    console.log(this.headerChildrenComponent);
  }

  ngDoCheck(): void {
    console.log('calling ngDoCheck');
  }

  addRoom() {
    const room: RoomList = {
      // roomNumber: '100',
      roomType: 'Semi Private',
      amenities: 'AC',
      price: 400,
      photos: 'fake photo',
      checkinTime: new Date(),
      checkoutTime: new Date(),
      rating: 3.2,
    };

    // this.roomsList.push(room);
    // this.roomsList = [...this.roomsList, room];
    this.roomsService.addRoom(room).subscribe((data) => {
      this.roomsList = data;
    });
  }

  editRoom() {
    const room: RoomList = {
      roomNumber: '1',
      roomType: 'Semi Private',
      amenities: 'AC',
      price: 400,
      photos: 'fake photo',
      checkinTime: new Date(),
      checkoutTime: new Date(),
      rating: 3.2,
    };

    this.roomsService.editRoom(room).subscribe((data) => {
      this.roomsList = data;
    });
  }

  deleteRoom() {
    this.roomsService.deleteRoom('1').subscribe((data) => {
      this.roomsList = data;
    });
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'List Room';
  }

  selectsRoom(room: RoomList) {
    this.selectedRooms = room;
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
