import React from 'react'
import { useParams } from 'react-router-dom'
const ArticlePage = () => {
	const { name } = useParams()
	return (
		<>
			<h1 className='text-3xl mb-3'>This is the {name} article</h1>
		</>
	)
}

export default ArticlePage
