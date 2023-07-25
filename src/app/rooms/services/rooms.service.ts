import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AppConfig } from '../../../AppConfig/appconfig.interface';
import { APP_SERVICE_CONFIG } from '../../../AppConfig/appconfig.service';
import { environment } from '../../../environments/environment';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomsList: RoomList[] = [
    // {
    //   roomType: 'Deluxe Room',
    //   amenities: 'AC, WIFI, TV',
    //   price: 10000,
    //   checkinTime: new Date(),
    //   checkoutTime: new Date(),
    // },
    // {
    //   roomType: ' Semi Deluxe Room',
    //   amenities: 'AC, WIFI',
    //   price: 5000,
    //   checkinTime: new Date(),
    //   checkoutTime: new Date(),
    // },
    // {
    //   roomType: 'Normal Room',
    //   amenities: 'WIFI',
    //   price: 1000,
    //   checkinTime: new Date(),
    //   checkoutTime: new Date(),
    // },
  ];

  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient
  ) {
    console.log(config.rooturl);
  }

  getRooms() {
    // return this.roomsList;
    return this.http.get<RoomList[]>('/api/rooms');
  }

  addRoom(room: RoomList) {
    return this.http.post<RoomList[]>('/api/rooms', room);
  }

  editRoom(room: RoomList) {
    return this.http.put<RoomList[]>(`api/rooms/${room.roomNumber}`, room);
  }

  deleteRoom(id: string) {
    return this.http.delete<RoomList[]>(`api/rooms/${id}`);
  }
}
