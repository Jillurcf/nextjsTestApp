import React from 'react'

type Props = {
    params: {
        reviewId: string;
        productId: string;
    }
}

const ReviewDetail:React.FC<Props> = ({params}) => {
  return (
    <div>Review {params.reviewId} for product {params.productId}</div>
  )
}

export default ReviewDetail