
export  interface ContactType {
    id: number,
    name: string,
    username: string,
    email: string
}

export interface ContactInfoType {
    name: string,
    phone: number,
    username: string,
    address: AddressType
}

export interface AddressType {
    street: string,
    city: string,
}


export interface PostsType {
    id: number,
    title:string
}

export interface PostInfoType {
    id?: number,
    title:string,
    body: string,
}

export interface SocialsType {
    id: number,
    icon: string,
    path: string,
}