import React from 'react'
import articleContent from './article-content'
import { Link } from 'react-router-dom'

const ArticleList = () => {
  return (
    <>
      <h1 className='text-3xl mb-3'>Articles</h1>
      {articleContent.map((article, key) => (
        <Link key={key} to={`/article/${article.name}`}>
          <h3 className='font-bold py-1 my-1 hover:bg-indigo-100'>
            {article.title}
          </h3>
          <p className='pb-3 mb-2 border-b-2 border-gray-600'>
            {article.content[0].substring(0, 150)}...
          </p>
        </Link>
      ))}
    </>
  )
}

export default ArticleList
