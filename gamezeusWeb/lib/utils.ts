import axios from 'axios'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function fetchUsers(url: string, options?: {}) {
  try {
    const { data } = await axios({
      method: 'get',
      url: url,
      ...options,
    })

    return data
  } catch (error) {
    console.log(error)
  }
}
