import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { InitService } from './init.service';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'prac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('name', { static: true }) name!: ElementRef;
  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  ngOnInit(): void {
    this.name.nativeElement.innerText = 'Milton Hotel';
  }

  ngAfterViewInit(): void {
    // const componentRef = this.vcr.createComponent(RoomsComponent);
    // componentRef.instance.numberOfRooms = 500;
  }
  title = 'practice-app';
  role = 'Admin';

  constructor(private initService: InitService) {
    console.log(this.initService.config);
  }
}
