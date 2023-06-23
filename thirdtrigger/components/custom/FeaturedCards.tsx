import Image from "next/image"

import { Features } from "@/config/site"

export default function FeaturedCards() {
  return (
    <div className="justify-between space-y-6 p-6 sm:flex sm:space-y-0">
      {Features.map((feature, index) => (
        <div className="relative" key={index}>
          <Image
            className="duration-200 ease-in-out hover:scale-105"
            src={feature.imgSrc}
            alt={feature.altName}
            height={470}
            width={282}
          />
          <h1 className="absolute bottom-0 w-full px-4 py-3 text-2xl font-extrabold leading-tight tracking-tighter text-muted-foreground">
            {feature.title}
          </h1>
        </div>
      ))}
    </div>
  )
}
