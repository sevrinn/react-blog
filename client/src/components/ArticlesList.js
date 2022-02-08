import React from 'react'
import { Link } from 'react-router-dom'
const ArticlesList = ({ articles }) => (
  <>
    {articles.map((article, key) => (
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

export default ArticlesList
