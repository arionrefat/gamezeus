import * as React from 'react'
import Image from 'next/image'

import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

interface TopStoriesCardProps {
  imgSrc: string
  altName: string
  cardTitle: string
}

export default function TopStoriesCard(props: TopStoriesCardProps){
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
      <CardFooter className='flex justify-between'>
        <CardTitle>{props.cardTitle}</CardTitle>
      </CardFooter>
    </Card>
  )
}
