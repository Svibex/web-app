export interface IUser {
    id: string;
    name: string;
    email: string;
}

export interface IPost {
    userId: string;
    id: string;
    title: string;
    body: string;
}