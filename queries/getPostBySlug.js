import { spaceId, environmentId, accessToken } from '../contentful'

/**
 * Returns a Post document along with the corresponding includes in the shape of an {Array}.
 *
 * @param {string} slug Slug of the requested post
 * @returns {Object} {post, includes} Post and it's assets
 */
async function getPostBySlug(slug) {
  const data = await getPostData(slug)

  const post = data.items[0]
  const includes = data.includes

  return { post, includes }
}

async function getPostData(slug) {
  const postContentTypeId='post'

  const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}&content_type=${postContentTypeId}&limit=1&fields.slug=${slug}`
  const res = await fetch(url)
  const data = await res.json()

  return data
}

export default getPostBySlug
