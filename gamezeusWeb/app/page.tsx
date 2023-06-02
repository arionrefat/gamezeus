import Image from 'next/image'

import { gameReviews, photoBanner, topStories } from '@/config/site'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import BlogCardSquare from '@/components/custom/BlogCard'
import CategoriesTabs from '@/components/custom/CategoriesTabs'
import FeaturedCards from '@/components/custom/FeaturedCards'
import TopStoriesCard from '@/components/custom/TopStoriesCard'

export default function IndexPage() {
  return (
    <section className='container grid items-center gap-6 pb-8 pt-6 md:py-10'>
      <div className='flex max-w-[980px] flex-col items-start gap-2'>
        <h1 className='text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl'>
          Reviews done with Care
          <br className='hidden sm:inline' />
          for Gamers, by Gaymers
        </h1>
        <p className='max-w-[700px] text-lg text-muted-foreground sm:text-xl'>
          We make the best reviews ever, we have a writer among us, a pulitzer
          prize winner,
          <b> Mr Samam hasan</b> who will review each game carefully and disect
          each and every aspect of the game
        </p>
      </div>

      <div className='relative hidden lg:block'>
        <Image
          src={photoBanner.imgSrc}
          alt={photoBanner.altName}
          height={photoBanner.height}
          width={photoBanner.width}
        />

        <div className='absolute bottom-0 w-full'>
          <h1 className='text-5xl text-center font-extrabold leading-tight tracking-tighter text-muted-foreground'>
            Titanfall 2 the greatest game of all time
          </h1>
          <p className='text-xl text-muted-foreground text-center'>
            The legacy that has been forgotten my corpo greed but not forgetten by
            gamers
          </p>
        </div>
      </div>

      <FeaturedCards />

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

      <h1 className='pt-4 text-center text-4xl font-bold tracking-tight sm:text-start'>
        Catagories
      </h1>
      <CategoriesTabs />
    </section>
  )
}
