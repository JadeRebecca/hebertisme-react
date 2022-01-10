import React from 'react'
import { ContentContainer } from './LayoutElements'

const ContentLayout = (props) => {
  return <ContentContainer>{props.children}</ContentContainer>
}

export default ContentLayout
