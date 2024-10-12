import React from 'react'

type Props = {
  params : {
    productId: string;
  }
}

const ProductDetails:React.FC<Props> = ({params}) => {
  return (
    <div>ProductDetails{params.productId}</div>
  )
}

export default ProductDetails