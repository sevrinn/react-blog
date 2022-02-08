import React from 'react'
import articleContent from './article-content'

import ArticlesList from '../components/ArticlesList'

const ArticleListPage = () => {
  return (
    <>
      <h1 className='text-3xl mb-3'>Articles</h1>
      <ArticlesList articles={articleContent} />
    </>
  )
}

export default ArticleListPage
