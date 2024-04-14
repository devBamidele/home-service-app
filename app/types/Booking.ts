
export enum BookingStatus {
    Booked = 'Booked',
    InProgress = 'InProgress',
    Completed = 'Completed',
  }

export interface Booking {
    userName: string;
    userEmail: string;
    date: string;
    time: string;
    id: string ;
    bookingStatus: BookingStatus; 
    note?: string;
  }