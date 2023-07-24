import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'prac-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
})
export class RoomsListComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  @Input() rooms: RoomList[] = [];

  @Input() title: string = '';

  @Output() selectedRooms = new EventEmitter<RoomList>();

  selectRoom(room: RoomList) {
    // console.log(room);
    this.selectedRooms.emit(room);
  }
}
