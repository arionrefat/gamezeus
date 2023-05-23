import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface AvatarProps {
  imgSrc: string
  altName: string
}

export default function ProfileImg(props: AvatarProps) {
  return (
    <Avatar className="h-8 w-8">
      <AvatarImage src={props.imgSrc} alt={props.altName} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
