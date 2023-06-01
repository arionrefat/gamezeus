import { gameReviews, topStories } from '@/config/site'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import BlogCardSquare from '@/components/custom/BlogCard'
import FeaturedCards from '@/components/custom/FeaturedCards'
import CatagoriesTabs from '@/components/custom/Tabs'
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

      <FeaturedCards />

      <h1 className='pt-2 text-4xl font-bold tracking-tight'>
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

      <h1 className='text-4xl font-bold tracking-tight'>Editor&apos;s Pick</h1>
      <div className='flex flex-col justify-between space-y-4 sm:flex-row sm:space-y-0'>
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

      <h1 className='pt-4 text-4xl font-bold tracking-tight'>Catagories</h1>
      <CatagoriesTabs />
    </section>
  )
}
