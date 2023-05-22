export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: 'GameZeus',
  description:
    'Beautifully designed components built with Radix UI and Tailwind CSS.',
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'News',
      href: '/news',
    },
    {
      title: 'Catagories',
      dropdownItems: [
        {
          title: 'Apex',
          href: '/apex',
        },
        {
          title: 'Valorant',
          href: '/valorant',
        },
        {
          title: 'LOL',
          href: '/lol',
        },
      ],
    },
  ],
  links: {
    twitter: 'https://twitter.com/shadcn',
    github: 'https://github.com/shadcn/ui',
    docs: 'https://ui.shadcn.com',
  },
}
