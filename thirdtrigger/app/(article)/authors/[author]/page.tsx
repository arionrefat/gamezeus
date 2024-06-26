import { UserType } from '@/types/users'
import { gameReviews } from '@/config/site'
import { fetchAxios, strapiURL } from '@/lib/utils'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { BlogCardSquare } from '@/components/custom/BlogCard'
import ProfileImg from '@/components/custom/ProfileImg'

interface AuthorsPageProps {
  params: {
    author: string
  }
}

interface AuthorNames {
  id: number
  username: string
}

export async function generateStaticParams() {
  const response = await fetch(`https://strapi.gazirefat.me/api/users?fields=username`, {
    cache: 'no-store',
  })

  const authorIdNames: AuthorNames[] = await response.json()

  const authors = authorIdNames.map((author) => author.username)

  return authors.map((author) => author)
}

export default async function AuthorsPage({ params }: AuthorsPageProps) {
  const users: UserType[] = await fetchAxios(
    `${strapiURL}/api/users?filters[username][$eq]=${params.author}&populate=*`
  )

  const user = users[0]

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
              <CardTitle className='pb-2'>{user.fullname}</CardTitle>
              <CardDescription>{user.bio}</CardDescription>
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

      <div className='grid grid-cols-1 justify-between gap-y-4 pt-4 sm:grid-cols-4'>
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
