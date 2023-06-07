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
    <div className="container max-w-4xl py-6 sm:max-w-min lg:py-10">
      <h1 className="pb-4 text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
        Meet the Team
      </h1>
      <Separator className="pb-1" />
      <div className="flex flex-col items-start gap-4 pt-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex flex-col space-y-4 xl:flex-row xl:space-x-4 xl:space-y-0">
          {TeamDescription.map((author, index) => (
            <Card className="w-full md:w-96" key={index}>
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
    </div>
  )
}
