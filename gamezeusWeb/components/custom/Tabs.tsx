import { BlogCatagories } from '@/types/blogs'
import { gameReviews } from '@/config/site'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import BlogCardRectangle from '@/components/custom/BlogCardRec'

export default function CatagoriesTabs() {
  return (
    <Tabs defaultValue='Latest' className='w-full hidden sm:block'>
      <TabsList className='grid w-full grid-cols-6'>
        {BlogCatagories.map((catagories, index) => (
          <TabsTrigger key={index} value={catagories}>
            {catagories}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent
        value='Latest'
        className='pt-16 sm:pt-7 md:pt-5 lg:pt-4 xl:pt-3 space-y-9'
      >
        <div className='grid w-full grid-cols-1 sm:grid-cols-2 justify-items-center gap-4'>
          {gameReviews.map((blogs, index) => (
            <div className='hidden sm:grid' key={index}>
              <BlogCardRectangle
                imgSrc={blogs.imgSrc}
                author={blogs.author}
                altName={blogs.altName}
                cardTitle={blogs.cardTitle}
                cardDescription={blogs.cardDescription}
                publishedDate={blogs.publishedDate}
              />
            </div>
          ))}
        </div>
      </TabsContent>
      <TabsContent
        value='Videos'
        className='pt-16 sm:pt-7 md:pt-5 lg:pt-4 xl:pt-3 space-y-9'
      >
        <div className='grid w-full grid-cols-1 sm:grid-cols-2 justify-items-center gap-4'>
          {gameReviews.map((blogs, index) => (
            <div key={index}>
              <BlogCardRectangle
                imgSrc={blogs.imgSrc}
                altName={blogs.altName}
                cardTitle={blogs.cardTitle}
                cardDescription={blogs.cardDescription}
                publishedDate={blogs.publishedDate}
              />
            </div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  )
}
