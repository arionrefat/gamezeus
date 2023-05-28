import { BlogCatagories } from '@/types/blogs'
import { gameReviews } from '@/config/site'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import BlogCardSquare from '@/components/custom/BlogCard'
import BlogCardRectangle from '@/components/custom/BlogCardRec'

export default function CatagoriesTabs() {
  return (
    <Tabs defaultValue='latest' className='w-full'>
      <TabsList className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 w-full'>
        {BlogCatagories.map((catagories, index) => (
          <TabsTrigger key={index} value={catagories}>
            {catagories}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent
        value='latest'
        className='pt-16 sm:pt-7 md:pt-5 lg:pt-4 xl:pt-3 space-y-9'
      >
        <div className='grid w-full grid-cols-1 sm:grid-cols-2 justify-items-center gap-4'>
          {gameReviews.map((blogs, index) => (
            <div key={index}>
              <div className='hidden sm:grid'>
                <BlogCardRectangle
                  imgSrc={blogs.imgSrc}
                  author={blogs.author}
                  altName={blogs.altName}
                  cardTitle={blogs.cardTitle}
                  cardDescription={blogs.cardDescription}
                  publishedDate={blogs.publishedDate}
                />
              </div>
              <div className='sm:hidden flex flex-col space-y-4 justify-between'>
                <BlogCardSquare
                  imgSrc={blogs.imgSrc}
                  altName={blogs.altName}
                  cardTitle={blogs.cardTitle}
                  cardDescription={blogs.cardDescription}
                  publishedDate={blogs.publishedDate}
                />
              </div>
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
              <div className='hidden sm:grid'>
                <BlogCardRectangle
                  imgSrc={blogs.imgSrc}
                  altName={blogs.altName}
                  cardTitle={blogs.cardTitle}
                  cardDescription={blogs.cardDescription}
                  publishedDate={blogs.publishedDate}
                />
              </div>
              <div className='sm:hidden flex flex-col space-y-4 justify-between'>
                <BlogCardSquare
                  imgSrc={blogs.imgSrc}
                  altName={blogs.altName}
                  cardTitle={blogs.cardTitle}
                  cardDescription={blogs.cardDescription}
                  publishedDate={blogs.publishedDate}
                />
              </div>
            </div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  )
}
