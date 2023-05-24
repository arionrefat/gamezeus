import { cn } from '@/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface AvatarProps {
  imgSrc: string
  altName: string
  className?: string
}

export default function ProfileImg(props: AvatarProps) {
  return (
    <Avatar className={cn('h-8 w-8', props.className)}>
      <AvatarImage src={props.imgSrc} alt={props.altName} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
