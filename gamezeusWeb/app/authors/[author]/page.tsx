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
    name: string
  }
}

export default async function AuthorsPage({ params }: AuthorsPageProps) {
  console.log(params.name)

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
              <CardTitle className='pb-2'>{params.name}</CardTitle>
              <CardDescription>
                Samam Hasan is a renowned game journalist known for his profound
                insights and Pulitzer Prize-winning storytelling. His
                comprehensive game reviews, underpinned by deep analysis
              </CardDescription>
            </div>
          </CardFooter>
        </Card>
        <h1 className='hidden sm:block font-extrabold leading-tight tracking-tighter sm:text-4xl'>
          300 Articles
        </h1>
      </div>

      <h1 className='sm:hidden xs:block font-extrabold leading-tight tracking-tighter text-2xl text-center pb-2'>
        300 Articles
      </h1>

      <Separator className='py-1' />

      <div className='flex flex-col space-y-4 sm:flex-row sm:space-y-0 justify-between pt-4'>
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
