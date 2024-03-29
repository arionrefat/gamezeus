import Article from "components/Article.mdx"

import { Card, CardFooter, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import ProfileImg from "@/components/custom/ProfileImg"

interface ArticlesPageProps {
  params: {
    author: string
  }
}

export default async function ArticlesPage({ params }: ArticlesPageProps) {
  return (
    <div className="container py-2">
      <Card className="w-full items-center border-0">
        <CardHeader>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            Spider-Man: Across the Spider-Verse - Post-Credits Scene Check-in
            (No Spoilers)
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
            Are there any surprises after the credits roll in the latest
            wallcrawler epic?
          </p>
        </CardHeader>
        <CardFooter className="flex justify-between">
          <div className="flex">
            <ProfileImg
              imgSrc="https://avatars.githubusercontent.com/u/37513070?s=400&u=325b69876a241ec0e504c80918325016c5a12b30&v=4"
              altName="Refatul"
              className="h-5 w-5"
            />

            <h4 className="scroll-m-20 pl-2 text-sm font-semibold tracking-tight">
              Samam Hasan
            </h4>

            <p className="pl-2 text-sm text-muted-foreground">
              UPDATED: JUN 2, 2023
            </p>
          </div>

          <p className="text-sm text-muted-foreground">POSTED: JUN 2, 2023</p>
        </CardFooter>
      </Card>
      <Separator className="py-1" />

      <article className="prose pt-5 dark:prose-invert md:prose-lg lg:prose-xl">
        <div>
          <Article />
        </div>
      </article>
    </div>
  )
}
