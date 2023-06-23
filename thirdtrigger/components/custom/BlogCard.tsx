import * as React from 'react'
import Image from 'next/image'

import { BlogCardProps } from '@/types/blogs'
import { gameReviews } from '@/config/site'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import ProfileImg from './ProfileImg'

export function BlogCardSquare(props: BlogCardProps) {
  return (
    <Card className='h-auto w-full sm:h-[400px] sm:max-w-xs'>
      <CardHeader>
        <Image
          src={props.imgSrc}
          alt={props.altName}
          height={100}
          width={280}
        />
      </CardHeader>
      <CardContent>
        <CardTitle>{props.cardTitle}</CardTitle>
        <CardDescription>{props.cardDescription}</CardDescription>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <ProfileImg
          imgSrc='https://avatars.githubusercontent.com/u/37513070?s=400&u=325b69876a241ec0e504c80918325016c5a12b30&v=4'
          altName='Refatul'
        />
        <p>{props.publishedDate}</p>
      </CardFooter>
    </Card>
  )
}

function BlogCards() {
  return (
    <>
      <h1 className='text-center text-4xl font-bold tracking-tight sm:text-start'>
        Editor&apos;s Picks
      </h1>
      <div className='grid grid-cols-1 justify-between gap-y-4 sm:grid-cols-4'>
        {gameReviews.map((blogs, index) => (
          <BlogCardSquare
            key={index}
            imgSrc={blogs.imgSrc}
            altName={blogs.altName}
            cardTitle={blogs.cardTitle}
            cardDescription={blogs.cardDescription}
            publishedDate={blogs.publishedDate}
          />
        ))}
      </div>
    </>
  )
}

export default BlogCards
