import Image from 'next/image'

import { Features } from '@/config/site'

export default function FeaturedCards() {
  return (
    <div className='p-6 justify-between sm:flex space-y-6 sm:space-y-0'>
      {Features.map((feature, index) => (
        <div className='relative' key={index}>
          <Image
            className='hover:scale-105 ease-in-out duration-200'
            src={feature.imgSrc}
            alt={feature.altName}
            height={470}
            width={282}
          />
          <h1 className='text-2xl font-extrabold leading-tight tracking-tighter absolute bottom-0 px-4 py-3 text-muted-foreground w-full'>
            {feature.title}
          </h1>
        </div>
      ))}
    </div>
  )
}
