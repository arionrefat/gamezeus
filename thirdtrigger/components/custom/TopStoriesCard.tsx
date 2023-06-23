import Image from 'next/image'

import { topStories } from '@/config/site'
import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

interface TopStoriesCardProps {
  imgSrc: string
  altName: string
  cardTitle: string
}

export function TopStoriesCard(props: TopStoriesCardProps) {
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

function TopStoriesCards() {
  return (
    <>
      <h1 className='pt-2 text-center text-4xl font-bold tracking-tight sm:text-start'>
        Today&apos;s top stories
      </h1>
      <ScrollArea className='h-[330px] w-full sm:rounded-md sm:border sm:p-4'>
        <div className='flex'>
          {topStories.map((story, index) => (
            <div className='p-2' key={index}>
              <TopStoriesCard
                key={index}
                imgSrc={story.imgSrc}
                altName={story.altName}
                cardTitle={story.cardTitle}
              />
            </div>
          ))}
        </div>
        <ScrollBar orientation='horizontal' className='h-3.5' />
      </ScrollArea>
    </>
  )
}

export default TopStoriesCards
