export interface UserData {
    "id": number,
    "email": string,
    "first_name": string,
    "last_name": string,
    "avatar": URL
}

export interface Userlist {
    "page": number,
    "per_page": number,
    "total": number,
    "total_pages": number,
    'data': UserData[];
}