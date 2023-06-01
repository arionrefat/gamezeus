import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <div className='container py-10'>
      <div className='flex space-x-4'>
        <Skeleton className='h-[150px] w-[150px] rounded-xl' />
        <div className='space-y-4'>
          <Skeleton className='h-9 w-[200px]' />
          <Skeleton className='h-4 w-[200px]' />
          <Skeleton className='h-4 w-10' />
        </div>
      </div>
      <div className='flex space-x-4 py-10'>
        <Skeleton className='h-[150px] w-[150px] rounded-xl' />
        <div className='space-y-4'>
          <Skeleton className='h-9 w-[200px]' />
          <Skeleton className='h-4 w-[200px]' />
          <Skeleton className='h-4 w-10' />
        </div>
      </div>
    </div>
  )
}
