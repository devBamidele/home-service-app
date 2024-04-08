interface Category {
    id : string;
    name : string;
    icon : {
        url : string;
    }
}

interface CategoryResponse {
    categories: Category[];
}