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
      href: '/news',
      drwopdown: true,
      items: [
        {
          apex: '/apex',
          cod: '/cod',
          valorant: '/valorant',
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
