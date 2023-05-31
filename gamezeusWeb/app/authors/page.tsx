import Link from 'next/link'
import { fetchUsers } from '@/lib/utils'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import ProfileImg from '@/components/custom/ProfileImg'
import { UserType } from '@/types/users'

export const metadata = {
  title: 'All the authors',
}

export default async function AuthorsPage() {
  const users:UserType[] = await fetchUsers('http://127.0.0.1:1337/api/users')
  return (
    <div className='container max-w-4xl sm:max-w-max py-6 lg:py-10'>
      <h1 className='text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl pb-4'>
        Meet Our Authors
      </h1>
      <Separator className='pb-1' />
      <div className='flex items-start gap-4 md:flex-row md:justify-between md:gap-8 pt-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4'>
          {users.map((author, index) => (
            <Link href={`/authors/${author.uuid}`} key={index}>
              <Card className='w-[326px] flex'>
                <CardHeader>
                  <ProfileImg
                    imgSrc={author.avatar}
                    altName={author.username}
                    className='h-11 w-11'
                  />
                </CardHeader>
                <CardFooter className='pt-6'>
                  <div>
                    <CardTitle>{author.username}</CardTitle>
                    <CardDescription>{author.designation}</CardDescription>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}