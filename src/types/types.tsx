export interface IAddress {
    city: string;
}

export interface ICompany {
    name: string;
    bs: string;
}

export interface IUser {
    id: string;
    name: string;
    username: string;
    email: string;
    website: string;
    address: IAddress;
    company: ICompany;
    phone: string;
}

export interface IPost {
    userId: string;
    id: string;
    title: string;
    body: string;
}