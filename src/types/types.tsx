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
    company: ICompany;
    phone: string;
}

export interface IPost {
    userId: string;
    id: string;
    title: string;
    body: string;
}

export interface IComment {
    postId?: string;
    id: string;
    name: string;
    email: string;
    body: string;
}

export interface IPostsListProps {
    postsNumber: string;
}