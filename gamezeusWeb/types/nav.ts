export interface NavItem {
  title: string
  href?: string
  dropdownItems?: Array<NavItem>
  disabled?: boolean
  external?: boolean
}
