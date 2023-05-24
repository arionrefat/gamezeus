import * as React from 'react'
import Image from 'next/image'
import { BlogCardProps } from '@/types/blogs'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import ProfileImg from './ProfileImg'

export default function BlogCardSquare(props: BlogCardProps){
  return (
    <Card className='w-[320px]'>
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
        <CardDescription>
          {props.cardDescription}
        </CardDescription>
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
