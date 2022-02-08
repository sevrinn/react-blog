import React from 'react'
import { useParams } from 'react-router-dom'
import articleContent from './article-content'
const ArticlePage = () => {
	const { name } = useParams()
	const article = articleContent.find((article) => article.name === name)

	if (!article) return <h1 className='text-3xl mb-3'>Article does not exist</h1>
	return (
		<>
			<h1 className='text-3xl mb-3'>{article.title}</h1>
			{article.content.map((paragraph, key) => (
				<p key={key} className='mb-5'>
					{paragraph}
				</p>
			))}
		</>
	)
}

export default ArticlePage
