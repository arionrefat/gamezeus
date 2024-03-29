import Link from 'next/link'

import { UserType } from '@/types/users'
import { fetchAxios, strapiURL } from '@/lib/utils'
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import ProfileImg from '@/components/custom/ProfileImg'

export const metadata = {
  title: 'All the authors of thirdtrigger',
}

export default async function AuthorsPage() {
  const users: UserType[] = await fetchAxios(
    `${strapiURL}/api/users?populate=*`
  )

  return (
    <div className='container max-w-4xl py-6 sm:max-w-max lg:py-10'>
      <h1 className='pb-4 text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl'>
        Meet Our Authors
      </h1>
      <Separator className='pb-1' />
      <div className='flex items-start gap-4 pt-4 md:flex-row md:justify-between md:gap-8'>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4'>
          {users ? (
            users.map((author, index) => (
              <Link href={`/authors/${author.username}`} key={index}>
                <Card className='flex w-[326px]'>
                  <CardHeader>
                    <ProfileImg
                      imgSrc={strapiURL + author.photo.formats.thumbnail.url}
                      altName={author.username}
                      className='h-11 w-11'
                    />
                  </CardHeader>
                  <CardFooter className='pt-6'>
                    <CardTitle>{author.fullname}</CardTitle>
                  </CardFooter>
                </Card>
              </Link>
            ))
          ) : (
            <h1 className='text-3xl'>No Authors</h1>
          )}
        </div>
      </div>
    </div>
  )
}
