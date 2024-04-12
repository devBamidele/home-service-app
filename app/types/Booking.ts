
enum BookingStatus {
    Booked = 'Booked',
    InProgress = 'InProgress',
    Completed = 'Completed',
  }

interface Booking {
    userName: string;
    userEmail: string;
    date: string;
    time: string;
    businessId: string ;
    bookingStatus: BookingStatus; 
    note: string;
  }