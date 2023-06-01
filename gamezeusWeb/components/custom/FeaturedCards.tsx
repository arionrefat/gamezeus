'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import { Features } from '@/config/site'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

export default function FeaturedCards() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 400)
  }, [])

return (
    <div>
      {!isMobile ? (
        <div className='flex p-6 justify-between'>
          {Features.map((feature, index) => (
            <div className='relative' key={index}>
              <div>
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
            </div>
          ))}
        </div>
      ) : (
        <ScrollArea className='h-[470px] rounded-md border sm:p-4'>
          <div className='p-6 justify-between'>
            {Features.map((feature, index) => (
              <div className='relative' key={index}>
                <div>
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
              </div>
            ))}
          </div>
          <ScrollBar orientation='horizontal' className='h-3.5' />
        </ScrollArea>
      )}
    </div>
  )
}
