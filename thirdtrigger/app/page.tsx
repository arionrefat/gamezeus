import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'
import CategoriesTabs from '@/components/custom/CategoriesTabs'
import FeaturedCards from '@/components/custom/FeaturedCards'
import TopStoriesCards from '@/components/custom/TopStoriesCard'
import HeroSection from '@/components/herosection'
import BlogCards from '@/components/custom/BlogCard'

export default function IndexPage() {
  return (
    <section className='container grid items-center gap-6 pb-8 pt-6 md:py-10'>
      <HeroSection />
      <FeaturedCards />
      <TopStoriesCards />
      <BlogCards />

      <h1 className='pt-4 text-center text-4xl font-bold tracking-tight sm:text-start'>
        Catagories
      </h1>
      <CategoriesTabs />

      <div className='flex justify-center'>
        <Link
          href='articles'
          className={buttonVariants({ variant: 'outline' })}
        >
          Go to articles
        </Link>
      </div>
    </section>
  )
}
