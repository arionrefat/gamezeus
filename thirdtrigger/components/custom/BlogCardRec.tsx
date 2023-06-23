import * as React from "react"
import Image from "next/image"
import Link from "next/link"

import { BlogCardProps } from "@/types/blogs"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import ProfileImg from "./ProfileImg"

export default function BlogCardRectangle(props: BlogCardProps) {
  return (
    <Card className="flex h-auto w-full sm:h-[160px] sm:w-[658px]">
      <CardHeader className="flex-none basis-2/5">
        <Link href={"articles/asa"}>
          <Image
            src={props.imgSrc}
            alt={props.altName}
            height={90}
            width={200}
          />
        </Link>
      </CardHeader>
      <div className="py-6">
        <CardContent className="flex flex-col justify-center p-0">
          <Link href={"articles/asa"}>
            <CardTitle>{props.cardTitle}</CardTitle>
          </Link>
          <CardDescription className="pt-1">
            {props.cardDescription}
          </CardDescription>
          <div className="flex items-center space-x-1 pt-3">
            <ProfileImg
              imgSrc="https://avatars.githubusercontent.com/u/37513070?s=400&u=325b69876a241ec0e504c80918325016c5a12b30&v=4"
              altName="Refatul"
              className="h-4 w-4"
            />
            <CardDescription>{props.author}</CardDescription>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}
