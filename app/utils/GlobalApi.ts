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

export { getSlider, getCategory, getBusinessList };