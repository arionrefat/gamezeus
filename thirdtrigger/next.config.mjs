/** @type {import('next').NextConfig} */

import NextMdx from '@next/mdx';
import remarkGfm from "remark-gfm"
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxImages from 'remark-mdx-images';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  experimental: {
    mdxRs: true,
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
      },
    ],
  },
}

export default NextMdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, remarkFrontmatter, remarkMdxFrontmatter, remarkMdxImages],
    rehypePlugins: [],
  },
})(nextConfig)
