import PostPreview from '../components/post-preview'
import { ChunkCollection, Chunk } from 'editmode-react'
import * as post from '../lib/post'

export default function MoreStories() {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        <Chunk identifier="cnk_60191809a903eb0f813d" />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
        <ChunkCollection identifier="col_pk6NapV7YlH1">
          <PostPreview {...post} />
        </ChunkCollection>
      </div>
    </section>
  )
}
