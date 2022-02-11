import React, { useState } from 'react'

const AddCommentForm = ({ articleName, setArticleInfo }) => {
	const [username, setUsername] = useState('')
	const [commentText, setCommentText] = useState('')

	const inputClass =
		'border-2 border-indigo-400 rounded-md focus:outline-indigo-600 p-1'

	const addComment = async () => {
		const result = await fetch(`/api/articles/${articleName}/add-comment`, {
			method: 'post',
			body: JSON.stringify({ username, text: commentText }),
			headers: {
				'Content-Type': 'application/json',
			},
		})
		const body = await result.json()
		setArticleInfo(body)
		setUsername('')
		setCommentText('')
	}
	return (
		<div className='flex flex-col'>
			<label className='flex flex-col'>
				Name:
				<input
					className={inputClass}
					type='text'
					value={username}
					onChange={(event) => setUsername(event.target.value)}
				/>
			</label>
			<label className='flex flex-col'>
				Comment:
				<textarea
					className={inputClass}
					cols='50'
					rows='4'
					value={commentText}
					onChange={(event) => setCommentText(event.target.value)}
				/>
			</label>

			<button onClick={() => addComment()}>Add Comment</button>
		</div>
	)
}

export default AddCommentForm
