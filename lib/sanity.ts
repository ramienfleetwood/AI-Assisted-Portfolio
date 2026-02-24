import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

export async function getProjects() {
  const query = `*[_type == "project"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    description,
    mainImage,
    technologies,
    githubUrl,
    liveUrl,
    featured,
    publishedAt
  }`

  return client.fetch(query)
}

export async function getProjectBySlug(slug: string) {
  const query = `*[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    mainImage,
    technologies,
    githubUrl,
    liveUrl,
    content,
    featured,
    publishedAt
  }`

  return client.fetch(query, { slug })
}

export async function getFeaturedProjects() {
  const query = `*[_type == "project" && featured == true] | order(publishedAt desc) {
    _id,
    title,
    slug,
    description,
    mainImage,
    technologies,
    githubUrl,
    liveUrl,
    publishedAt
  }`

  return client.fetch(query)
}
