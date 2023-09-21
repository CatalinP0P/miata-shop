import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Document } from '@contentful/rich-text-types'

export default function RichTextBox({ content }: { content: Document }) {
  return <>{documentToReactComponents(content, {})}</>
}
