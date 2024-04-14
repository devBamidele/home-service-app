export interface Business {
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

export interface BusinessListResponse {
    businessLists: Business[];
}