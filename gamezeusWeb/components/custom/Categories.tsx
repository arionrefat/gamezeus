'use client'

import * as React from 'react'
import Link from 'next/link'

import { NavItem } from '@/types/nav'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface DropdownMenuProps {
  title: string
  items: NavItem[]
}

export default function DropdownMenuRadioGroupCatagories({
  props,
}: {
  props: DropdownMenuProps
}) {
  const [position, setPosition] = React.useState<string>()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='outline'
          className='border-none text-muted-foreground px-0'
        >
          {props.title}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          {props.items.map((item, index) => {
            return (
              <DropdownMenuRadioItem value={item.title}>
                <Link
                  key={index}
                  href={item.href as string}
                  className={cn(
                    'flex items-center text-lg font-semibold text-muted-foreground sm:text-sm',
                    item.disabled && 'cursor-not-allowed opacity-80'
                  )}
                >
                  {item.title}
                </Link>
              </DropdownMenuRadioItem>
            )
          })}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
