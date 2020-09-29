import { ChunkFieldValue, rawChunk } from 'editmode-react'
import cn from 'classnames'


// Raw Contents
export const slug = Math.random();
export const rawTitle = "rawTitle"
export const authorNameRaw =  "authorNameRaw"

//Editable Contents
export const title = <ChunkFieldValue identifier="Title" />
export const coverImage = <ChunkFieldValue 
                    identifier="Cover" 
                    alt={`Cover Image for ${slug}`}
                    className={cn('shadow-small', {
                      'hover:shadow-medium transition-shadow duration-200': slug,
                    })}
                  />
export const date = <ChunkFieldValue identifier="Date" />
export const excerpt = <ChunkFieldValue identifier="Excerpt"/>
export const authorAvatar = <ChunkFieldValue identifier="AuthorAvatar" className="w-12 h-12 rounded-full mr-4" alt={authorNameRaw}/>
export const authorName = <ChunkFieldValue identifier="Author"/>
