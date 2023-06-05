import CategoriesTabs from '@/components/custom/CategoriesTabs'

export default async function ArticlesPage() {
  return (
    <div className='container py-2'>
      <h1 className='pt-4 pb-4 text-center text-4xl font-bold tracking-tight sm:text-start'>
        Catagories
      </h1>
      <CategoriesTabs />
    </div>
  )
}
