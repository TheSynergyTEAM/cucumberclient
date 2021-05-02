import React from 'react'
import { StyledContainer, StyledBase, StyledBaseTitle } from './style'

interface SectionContainerProps {
  childSections: React.ReactNodeArray
}

interface SectionBaseProps {
  title: string
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  childSections
}) => {
  return (
    <StyledContainer>{childSections.map((child) => child)}</StyledContainer>
  )
}

export const SectionBase: React.FC<SectionBaseProps> = ({
  children,
  title
}) => {
  return (
    <StyledBase>
      <StyledBaseTitle>{title}</StyledBaseTitle>
      {children}
    </StyledBase>
  )
}

export default SectionContainer
