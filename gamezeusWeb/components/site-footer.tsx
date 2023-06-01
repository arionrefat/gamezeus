import Link from 'next/link'

import { siteConfig } from '@/config/site'
import { Icons } from '@/components/icons'

export function SiteFooter() {
  return (
    <footer className='border-t py-6 md:py-0'>
      <div className='container flex items-center justify-between gap-4 md:h-24 md:flex-row'>
        <div className='flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0'>
          <Icons.logo className='hidden h-6 w-6 md:inline-block' />
          <p className='text-center text-sm leading-loose text-muted-foreground md:text-left'>
            Built by{' '}
            <a
              href={siteConfig.links.twitter}
              target='_blank'
              rel='noreferrer'
              className='font-medium underline underline-offset-4'
            >
              Arion
            </a>
            {' '}© 2023
          </p>
        </div>
        <div className='flex flex-col space-x-0 space-y-4 text-muted-foreground sm:flex-row sm:space-x-4 sm:space-y-0 md:text-left'>
          <Link
            href='/privacy'
            className='font-medium underline-offset-4 hover:underline'
          >
            Privacy
          </Link>
          <Link
            href='/authors'
            className='font-medium underline-offset-4 hover:underline'
          >
            Authors
          </Link>
          <Link
            href='/tos'
            className='font-medium underline-offset-4 hover:underline'
          >
            Terms
          </Link>
          <Link
            href='/contact'
            className='font-medium underline-offset-4 hover:underline'
          >
            Contact
          </Link>
          <Link
            href='/about'
            className='font-medium underline-offset-4 hover:underline'
          >
            About
          </Link>
        </div>
      </div>
    </footer>
  )
}
