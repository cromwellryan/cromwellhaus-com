import { useRouter } from 'next/router'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { spaceId, environmentId, accessToken } from '../contentful';

async function getPost(slug) {
  const postContentTypeId='post';

  const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}&content_type=${postContentTypeId}&limit=1&fields.slug=${slug}`
  const res = await fetch(url)
  const data = await res.json()

  console.log({url, count: data})

  return data.items[0]
}

export default function Post({post}) {
  const router = useRouter()
  const { slug } = router.query

  const { title, body } = post.fields


  return (
    <>
      <h1><a href={slug}>{title}</a></h1>
      {documentToReactComponents(body)}
    </>
  )
}

Post.getInitialProps = async (ctx) => {
  const post = await getPost(ctx.query.slug);

  return { post }
}
