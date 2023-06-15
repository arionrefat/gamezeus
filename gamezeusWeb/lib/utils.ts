import axios from "axios"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function fetchAxios(url: string, options?: {}) {
  try {
    const { data } = await axios({
      method: "get",
      url: url,
      ...options,
    })

    return data
  } catch (error) {
    console.log(error)
  }
}

export const strapiURL = process.env.SERVER_URL
