import { gameReviews } from '@/config/site'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import BlogCardSquare from '@/components/custom/BlogCard'
import ProfileImg from '@/components/custom/ProfileImg'

interface AuthorsPageProps {
  params: {
    author: string
  }
}

export default async function AuthorsPage({ params }: AuthorsPageProps) {
  return (
    <div className='container py-2'>
      <div className='flex items-center md:flex-row md:justify-between'>
        <Card className='flex max-w-4xl items-center border-0'>
          <CardHeader>
            <ProfileImg
              imgSrc='https://pbs.twimg.com/profile_images/1588421280587399168/fOiwMcBk_400x400.jpg'
              altName='Samam Hasan'
              className='h-12 w-12'
            />
          </CardHeader>
          <CardFooter className='pt-6'>
            <div>
              <CardTitle className='pb-2'>{params.author}</CardTitle>
              <CardDescription>
                Samam Hasan is a renowned game journalist known for his profound
                insights and Pulitzer Prize-winning storytelling. His
                comprehensive game reviews, underpinned by deep analysis
              </CardDescription>
            </div>
          </CardFooter>
        </Card>
        <h1 className='hidden font-extrabold leading-tight tracking-tighter sm:block sm:text-4xl'>
          300 Articles
        </h1>
      </div>

      <h1 className='xs:block pb-2 text-center text-2xl font-extrabold leading-tight tracking-tighter sm:hidden'>
        300 Articles
      </h1>

      <Separator className='py-1' />

      <div className='grid grid-cols-1 justify-between gap-y-4 sm:grid-cols-4 pt-4'>
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
    </div>
  )
}
