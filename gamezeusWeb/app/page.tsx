import BlogCard from '@/components/custom/BlogCard'

export default function IndexPage() {
  return (
    <section className='container grid items-center gap-6 pb-8 pt-6 md:py-10'>
      <div className='flex max-w-[980px] flex-col items-start gap-2'>
        <h1 className='text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl'>
          Reviews done with Care
          <br className='hidden sm:inline' />
          for Gamers, by Gaymers
        </h1>
        <p className='max-w-[700px] text-lg text-muted-foreground sm:text-xl'>
          We make the best reviews ever, we have a writer among us, a pulitzer prize winner,
          <b> Mr Samam hasan</b> who will review each game carefully and disect
          each and every aspect of the game
        </p>
      </div>
      <div className='flex justify-between'>
        <BlogCard
          imgSrc='https://www.ggrecon.com/media/dhmmah05/apex-legends-season-16-balance-changes-all-buffs-and-nerfs-3.jpg'
          altName='apex image'
          cardTitle='Apex Legends'
          cardDescription='Checkout our review of season 17'
          publishedDate='June 19, 2023'
        />
        <BlogCard
          imgSrc='https://www.ggrecon.com/media/dhmmah05/apex-legends-season-16-balance-changes-all-buffs-and-nerfs-3.jpg'
          altName='apex image'
          cardTitle='Apex Legends'
          cardDescription='Checkout our review of season 17'
          publishedDate='June 19, 2023'
        />
        <BlogCard
          imgSrc='https://www.ggrecon.com/media/dhmmah05/apex-legends-season-16-balance-changes-all-buffs-and-nerfs-3.jpg'
          altName='apex image'
          cardTitle='Apex Legends'
          cardDescription='Checkout our review of season 17'
          publishedDate='June 19, 2023'
        />
        <BlogCard
          imgSrc='https://www.ggrecon.com/media/dhmmah05/apex-legends-season-16-balance-changes-all-buffs-and-nerfs-3.jpg'
          altName='apex image'
          cardTitle='Apex Legends'
          cardDescription='Checkout our review of season 17'
          publishedDate='June 19, 2023'
        />
      </div>
    </section>
  )
}
