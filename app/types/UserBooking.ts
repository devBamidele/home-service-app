import { BookingStatus } from "./Booking";
import { Business } from "./BusinessListResponse";


export interface UserBooking {
    id : string,
    userName: string;
    userEmail: string;
    date: string;
    time: string;
    bookingStatus: BookingStatus,
    businessList: Business;
}

 export interface UserBookingResponse {
    bookings : UserBooking[],
}