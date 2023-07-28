import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { InitService } from './init.service';
import { RoomsComponent } from './rooms/rooms.component';
import { ConfigService } from './services/config.service';

@Component({
  selector: 'prac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('name', { static: true }) name!: ElementRef;
  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  constructor(
    private initService: InitService,
    private configService: ConfigService,
    private router: Router
  ) {
    console.log(this.initService.config);
  }

  ngOnInit(): void {
    this.router.events.subscribe((events) => console.log(events));
    // this.name.nativeElement.innerText = 'Milton Hotel';
  }

  ngAfterViewInit(): void {
    // const componentRef = this.vcr.createComponent(RoomsComponent);
    // componentRef.instance.numberOfRooms = 500;
  }
  title = 'practice-app';
  role = 'Admin';
}
