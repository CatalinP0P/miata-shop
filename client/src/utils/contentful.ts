import { createClient } from 'contentful'

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN as string,
})

export interface ContentfulEntry {
  sys: {
    id: string
  }
  fields: {
    title: string
    content: string
  }
}

export default client
