import React from 'react'
import { useParams } from 'react-router-dom'
import articleContent from './article-content'
import ArticlesList from '../components/ArticlesList'

const ArticlePage = () => {
  const { name } = useParams()
  const article = articleContent.find((article) => article.name === name)

  if (!article) return <h1 className='text-3xl mb-3'>Article does not exist</h1>

  const otherArticles = articleContent.filter(
    (article) => article.name !== name
  )
  return (
    <>
      <h1 className='text-3xl mb-3'>{article.title}</h1>
      {article.content.map((paragraph, key) => (
        <p key={key} className='mb-5'>
          {paragraph}
        </p>
      ))}
      <h3>Other Articles</h3>
      <ArticlesList articles={otherArticles} />
    </>
  )
}

export default ArticlePage
