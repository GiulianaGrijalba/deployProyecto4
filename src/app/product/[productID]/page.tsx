import { getProductsById } from '@/helpers/products.helper'
import ProductDetailView from '@/views/ProductDetailView'
import React from 'react'

const ProductDetail:React.FC<{params: {productID: string}}> = async ({params}) => {
  const {productID} = await params
  const product = await getProductsById(productID)
  console.log(product)
  return (
    <ProductDetailView {...product}/>
  )
}

export default ProductDetail