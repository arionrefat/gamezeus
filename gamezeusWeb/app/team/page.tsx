import Image from "next/image"

import { TeamDescription } from "@/config/team"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export const metadata = {
  title: "Blog",
}

export default async function TeamPage() {
  return (
    <div className="container p-6">
      <h1 className="pb-4 text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
        Meet the Team
      </h1>
      <Separator className="pb-1" />
      <div className="grid grid-cols-1 gap-4 pt-4 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
        {TeamDescription.map((author, index) => (
          <Card key={index}>
            <CardHeader>
              <Image
                src={author.imgSrc}
                alt={author.altName}
                height={100}
                width={384}
              />
              <CardTitle className="pt-2">{author.altName}</CardTitle>
            </CardHeader>
            <CardContent>{author.designation}</CardContent>
            <CardFooter>
              <CardDescription className="text-left">
                {author.bio}
              </CardDescription>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

