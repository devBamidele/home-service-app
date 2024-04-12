import { request, gql } from 'graphql-request'
import { MASTER_URL } from './config';

const getSlider = async () => {
  const query = gql`
    query GetSlider {
        sliders {
          id
          name
          image {
            url
          }
        }
      }
      
`
  const result = await request(`${MASTER_URL}`, query);

  return result;
}


const getCategory = async () => {
  const query = gql`
  query GetCategory {
    categories {
      id
      name
      icon {
        url
      }
    }
  }
  
  `
  return await request(`${MASTER_URL}`, query);
}

const getBusinessList = async () => {
  const query = gql`
  query getBusinessList {
    businessLists {
      id
      name
      email
      contactPerson
      category {
        name
      }
      address
      about
      images {
        url
      }
    }
  }
  
  `
  return await request(`${MASTER_URL}`, query);
}

const getBusinessListByCategory = async (category: string) => {
  const query = gql`
  query getBusinessList {
    businessLists(where: {category: {name: "`+ category + `"}}) {
      id
      name
      email
      contactPerson
      category {
        name
      }
      address
      about
      images {
        url
      }
    }
  }  
  `

  return await request(`${MASTER_URL}`, query);
}


const createBooking = async (booking: Booking) => {
  const mutationQuery = gql`
  mutation createBooking {
    createBooking(
      data: {
        bookingStatus: Booked,
        businessLists: { connect: { id: "`+ booking.businessId + `" } },
        date: "`+ booking.date + `",
        time: "`+ booking.time + `",
        userEmail: "`+ booking.userEmail + `",
        userName: "`+ booking.userName + `",
        note: "`+ booking.note + `"
      }
    ) {
      id
    }
   publishManyBookings(to: PUBLISHED) {
    count
  }
  }
  
  `
  return await request(`${MASTER_URL}`, mutationQuery);
}

export {
  getSlider,
  getCategory,
  createBooking,
  getBusinessList,
  getBusinessListByCategory,
};