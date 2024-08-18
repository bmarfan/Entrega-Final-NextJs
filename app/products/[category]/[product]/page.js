import ItemDetailContainer from '@/app/components/products/ItemDetailContainer'
import React from 'react'

export async function generateStaticParams() {
    const products = await fetch('http://localhost:3000/api/products').then((res) => res.json())
   
    return products.map((product) => ({
      category: product.category,
      product: product.id,
    }))
  }
  
  export default function Page({ params }) {
    const product = params.product
    const category = params.category
    return(
        <>
        <ItemDetailContainer product={product} category={category}/>
        </>
    )
  }
