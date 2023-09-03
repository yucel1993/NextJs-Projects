"use client"

import CarouselComp from "./components/CarouselComp"
import Product from "./components/Product"

import MainLayout from "./layouts/MainLayout"

const products=[{
  id:1,
  title:"DavinCi",
  description:"lorem23  lorem fwfpkewfkwf  fwe",
  url:"https://picsum.photos/id/7",
  price:2000
},
{
  id:2,
  title:"DavinCi",
  description:"lorem23  lorem fwfpkewfkwf  fwe",
  url:"https://picsum.photos/id/7",
  price:2220
},

]

export default function Home() {
  return (
    <MainLayout>
    <CarouselComp />

    <div className="max-w-[1200px] mx-auto">
      <div className="text-2xl font-bold mt-4 mb-6 px-4">Products</div>

      <div className="grid grid-cols-5 gap-4">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  </MainLayout>
  )
}
