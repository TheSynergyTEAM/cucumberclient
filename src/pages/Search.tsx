import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import SearchArticles from 'components/articles/SearchArticles'

interface MatchParams {
  word: string
}

const Search: React.FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  return <SearchArticles search={match.params.word} />
}

export default Search
