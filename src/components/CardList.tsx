import Card from "./Card";
import { getProductsDB } from "@/helpers/products.helper";
import Link from "next/link";

const CardList = async() => {
  const productsToPreload = await getProductsDB();
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {productsToPreload && productsToPreload.map((product) => {
        return (
        <Link key={product.id} href= {`/product/${product.id}`}>
        <Card key={product.id} {...product} />
        </Link>
        )
      })
    }
    </div>
  )
}

export default CardList;
