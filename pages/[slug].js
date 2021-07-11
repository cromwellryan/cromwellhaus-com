import { useRouter } from 'next/router'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

import { spaceId, environmentId, accessToken } from '../contentful';

async function getPostData(slug) {
  const postContentTypeId='post';

  const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}&content_type=${postContentTypeId}&limit=1&fields.slug=${slug}`
  const res = await fetch(url)
  const data = await res.json()

  return data
}

function includedImage(imageContentId, includes) {
  const asset = includes.Asset.find(asset => asset.sys.id === imageContentId)

  return <img src={asset.fields.file.url} title={asset.fields.title} alt={asset.fields.description} />
}

export default function Post({post, includes}) {
  const router = useRouter()
  const { slug } = router.query

  const { title, body } = post.fields

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => includedImage(node.data.target.sys.id, includes)
    },
    renderMark: {
      [MARKS.CODE]: text => <pre>{text}</pre>
    }
  }


  return (
    <>
      <h1><a href={slug}>{title}</a></h1>
      {documentToReactComponents(body, options)}
    </>
  )
}

Post.getInitialProps = async (ctx) => {
  const data = await getPostData(ctx.query.slug)

  const post = data.items[0]
  const includes = data.includes

  return { post, includes }
}
