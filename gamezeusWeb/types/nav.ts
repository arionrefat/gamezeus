export interface NavItem {
  title: string
  href: string
  category?: boolean
  disabled?: boolean
  external?: boolean
}

export type MainNavItem = NavItem
