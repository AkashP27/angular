import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { BookingService } from './booking.service';

@Component({
  selector: 'prac-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;

  get guests() {
    return this.bookingForm.get('guests') as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    private bookingService: BookingService
  ) {}

  ngOnInit(): void {
    this.bookingForm = this.fb.group(
      {
        roomId: new FormControl(
          { value: '2', disabled: true },
          { validators: [Validators.required] }
        ),
        guestEmail: [
          '',
          { validators: [Validators.required, Validators.email] },
        ],
        checkinDate: [''],
        checkoutDate: [''],
        bookingStatus: [''],
        bookingAmount: [''],
        bookingDate: [''],
        mobileNumber: [''],
        guestName: [
          '',
          { validators: [Validators.required, Validators.minLength(5)] },
        ],
        address: this.fb.group({
          addressLine1: ['', { validators: [Validators.required] }],
          addressLine2: [''],
          city: ['', { validators: [Validators.required] }],
          state: ['', { validators: [Validators.required] }],
          country: [''],
          zipCode: [''],
        }),
        guests: this.fb.array([
          this.fb.group({
            guestName: new FormControl('', {
              validators: [Validators.required],
            }),
            age: new FormControl(''),
          }),
        ]),
        tnc: new FormControl(false, { validators: [Validators.requiredTrue] }),
      },
      {
        updateOn: 'blur',
      }
    );

    this.getBookingData();

    this.bookingForm.valueChanges.subscribe((data) => {
      this.bookingService.bookRoom(data);
    });
  }

  addPassport() {
    this.bookingForm.addControl('passport', new FormControl(''));
  }

  deletePassport() {
    if (this.bookingForm.get('passport'))
      this.bookingForm.removeControl('passport');
  }

  addGuest() {
    this.guests.push(
      this.fb.group({
        guestName: new FormControl(''),
        age: new FormControl(''),
      })
    );
  }

  removeGuest(i: number) {
    this.guests.removeAt(i);
  }

  addBooking() {
    console.log(this.bookingForm.value);
    // this.bookingService
    //   .bookRoom(this.bookingForm.getRawValue())
    //   .subscribe((data) => console.log(data));

    this.bookingForm.reset({
      roomId: '',
      guestEmail: '',
      checkinDate: '',
      checkoutDate: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',
      address: {
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
      },
      guests: [],
      tnc: false,
    });
  }

  getBookingData() {
    this.bookingForm.setValue({
      roomId: '44',
      guestEmail: 'harsh@gmail.com',
      checkinDate: '',
      checkoutDate: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: 'Harsh',
      address: {
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
      },
      guests: [],
      tnc: false,
    });
  }
}
