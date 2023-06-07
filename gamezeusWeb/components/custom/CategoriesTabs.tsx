import { BlogCatagories } from "@/types/blogs"
import { gameReviews } from "@/config/site"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BlogCardRectangle from "@/components/custom/BlogCardRec"

export default function CategoriesTabs() {
  return (
    <Tabs defaultValue="Latest" className="w-full">
      <TabsList className="grid w-full grid-cols-2 sm:grid-cols-6">
        {BlogCatagories.map((catagories, index) => (
          <TabsTrigger key={index} value={catagories}>
            {catagories}
          </TabsTrigger>
        ))}
      </TabsList>
      {BlogCatagories.map((catagories, index) => (
        <TabsContent
          value={catagories}
          key={index}
          className="space-y-9 pt-16 sm:pt-7 md:pt-5 lg:pt-4 xl:pt-3"
        >
          <div className="grid w-full grid-cols-1 justify-items-center gap-4 sm:grid-cols-2">
            {gameReviews.map((blogs, index) => (
              <div key={index}>
                <BlogCardRectangle
                  imgSrc={blogs.imgSrc}
                  altName={blogs.altName}
                  cardTitle={blogs.cardTitle}
                  cardDescription={blogs.cardDescription}
                  publishedDate={blogs.publishedDate}
                />
              </div>
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}
