import { IProduct } from "@/types";

const API_URL= process.env.NEXT_PUBLIC_API_URL;

export async function getProductsDB () {
    try {
        const response= await fetch(`${API_URL}/products`, {
            next: {revalidate:1200}
    })
    const products: IProduct[]= await response.json ();
    return products;
} catch (error : any) {
        throw new Error(error)
    }
}; 


export async function getProductsById (id:string) {
    try {
       const products: IProduct[] = await getProductsDB();
       const productFiltered = products.find((product) => product.id.toString() === id)
       if (!productFiltered) throw new Error("Product not found")
        return productFiltered
} catch (error : any) {
        throw new Error(error)
    }
}; 
