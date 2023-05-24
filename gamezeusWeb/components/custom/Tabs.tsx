import { BlogCatagories } from '@/types/blogs'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import BlogCardRectangle from '@/components/custom/BlogCardRec'

export default function TabsCustom() {
  return (
    <Tabs defaultValue='latest' className='w-full'>
      <TabsList className='grid w-full grid-cols-6'>
        {BlogCatagories.map((catagories) => (
          <TabsTrigger value={catagories}>{catagories}</TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value='latest' className='pt-3'>
        <div className='grid w-full grid-cols-2 justify-items-center gap-x-4 gap-y-4'>
          <BlogCardRectangle
            imgSrc='https://www.ggrecon.com/media/dhmmah05/apex-legends-season-16-balance-changes-all-buffs-and-nerfs-3.jpg'
            altName='apex image'
            cardTitle='PlayStation VR2 Has Strong Launch Despite Reports, Outselling Original PSVR'
            cardDescription="Get Link's iconic shield once again in Tears of the Kingdom in a brand new hiding place."
            author='Samam Hasan'
          />
          <BlogCardRectangle
            imgSrc='https://www.ggrecon.com/media/dhmmah05/apex-legends-season-16-balance-changes-all-buffs-and-nerfs-3.jpg'
            altName='apex image'
            cardTitle='PlayStation VR2 Has Strong Launch Despite Reports, Outselling Original PSVR'
            cardDescription="Get Link's iconic shield once again in Tears of the Kingdom in a brand new hiding place."
            author='Samam Hasan'
          />
          <BlogCardRectangle
            imgSrc='https://www.ggrecon.com/media/dhmmah05/apex-legends-season-16-balance-changes-all-buffs-and-nerfs-3.jpg'
            altName='apex image'
            cardTitle='PlayStation VR2 Has Strong Launch Despite Reports, Outselling Original PSVR'
            cardDescription="Get Link's iconic shield once again in Tears of the Kingdom in a brand new hiding place."
            author='Samam Hasan'
          />
        </div>
      </TabsContent>
      <TabsContent value='videos'>
        <BlogCardRectangle
          imgSrc='https://www.ggrecon.com/media/dhmmah05/apex-legends-season-16-balance-changes-all-buffs-and-nerfs-3.jpg'
          altName='apex image'
          cardTitle='Apex Legends'
          cardDescription='Checkout our review of season 17'
          author='Samam Hasan'
        />
      </TabsContent>
    </Tabs>
  )
}
