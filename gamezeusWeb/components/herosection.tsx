import Image from 'next/image'

import { photoBanner } from '@/config/site'

export default function HeroSection() {
  return (
    <>
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

      <div className='relative hidden lg:block'>
        <Image
          src={photoBanner.imgSrc}
          alt={photoBanner.altName}
          height={photoBanner.height}
          width={photoBanner.width}
        />

        <div className='absolute bottom-0 w-full'>
          <h1 className='text-5xl text-center font-extrabold leading-tight tracking-tighter text-muted-foreground'>
            Titanfall 2 the greatest game of all time
          </h1>
          <p className='text-xl text-muted-foreground text-center'>
            The legacy that has been forgotten by corpo greed but not forgotten
            by gamers
          </p>
        </div>
      </div>
    </>
  )
}
