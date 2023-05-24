import { gameReviews, topStories } from '@/config/site'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import BlogCardSquare from '@/components/custom/BlogCard'
import TabsCustom from '@/components/custom/Tabs'
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
      <h1 className='text-4xl font-bold tracking-tight'>Today's top stories</h1>
      <ScrollArea className='h-[330px] w-full rounded-md border p-4'>
        <div className='flex'>
          {topStories.map((story) => (
            <div className='p-2'>
              <TopStoriesCard
                imgSrc={story.imgSrc}
                altName={story.altName}
                cardTitle={story.cardTitle}
              />
            </div>
          ))}
        </div>
        <ScrollBar orientation='horizontal' className='h-3.5' />
      </ScrollArea>
      <h1 className='text-4xl font-bold tracking-tight'>Editor's Pick</h1>
      <div className='flex justify-between'>
        {gameReviews.map((blogs) => (
          <BlogCardSquare
            imgSrc={blogs.imgSrc}
            altName={blogs.altName}
            cardTitle={blogs.cardTitle}
            cardDescription={blogs.cardDescription}
            publishedDate={blogs.publishedDate}
          />
        ))}
      </div>
      <TabsCustom />
    </section>
  )
}
