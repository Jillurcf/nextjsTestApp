import React from 'react'
import { Metadata } from 'next'
type Props = {}

export const metadata: Metadata = {
title: {
  absolute: "Blog"
},
}

const Blog = (props: Props) => {
  return (
    <div>Blog</div>
  )
}

export default Blog