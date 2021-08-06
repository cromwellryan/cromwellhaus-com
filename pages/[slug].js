import { useRouter } from 'next/router'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'

import { getPostBySlug } from '../queries'

function renderIncludedAsset(imageContentId, includes) {
  const asset = includes.Asset.find(asset => asset.sys.id === imageContentId)

  return <img class="image" src={asset.fields.file.url} title={asset.fields.title} alt={asset.fields.description} />
}

export default function Post({post, includes}) {
  const router = useRouter()
  const { slug } = router.query

  const { title, body } = post.fields

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => renderIncludedAsset(node.data.target.sys.id, includes)
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
  return getPostBySlug(ctx.query.slug)
}
