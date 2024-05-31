import { useInfiniteQuery } from "@tanstack/react-query"

import CategoriesTabs from "@/components/custom/CategoriesTabs"

const posts = [
  {
    id: 1,
    title: "Hello World",
  },
  {
    id: 2,
    title: "Hello World 2",
  },
  {
    id: 3,
    title: "Hello World 3",
  },

  {
    id: 4,
    title: "Hello World 3",
  },

  {
    id: 5,
    title: "Hello World 3",
  },
]

export default async function ArticlesPage() {
  return (
    <div className="container py-2">
      <h1 className="py-4 text-center text-4xl font-bold tracking-tight sm:text-start">
        Catagories
      </h1>
      <CategoriesTabs />
    </div>
  )
}
