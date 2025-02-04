import { ReactNode } from "react";

export interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    categoryId: number;
}

export interface ICategory {
    id: number;
    name: string;
}

export interface ILoginProps {
    email: string;
    password: string
}

export interface ILoginPropsErrors {
    email?: string;
    password?: string
}
export interface IRegisterProps {
    email: string;
    password: string;
    name: string;
    address: string;
    phone: string;
  }
  
  export interface IRegisterPropsErrors {
    email?: string;
    password?: string;
    name?: string;
    address?: string;
    phone?: string;
  }
  
  export interface IUserSession{
    token: string;
    phone: ReactNode;
    address: ReactNode;
    name: ReactNode;
    user: {
        address: string;
        email: string;
        id: number;
        name: string;
        phone: string;
        orders: IOrder
    }
}
  
    export interface IOrder {
       id: number;
       status: string;
       date:Date;
       products: IProduct[]    
}


  