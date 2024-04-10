interface BusinessList {
    id: string;
    name: string;
    email: string;
    contactPerson: string;
    category: {
        name: string;
    }
    address: string;
    about: string;
    images: [
        {
            url: string;
        }
    ]
}

interface BusinessListResponse {
    businessLists: BusinessList[];
}