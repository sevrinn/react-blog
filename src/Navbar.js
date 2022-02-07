import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<nav>
			<ul className='flex justify-center border-b-2 border-indigo-100'>
				<li className='px-5 py-2 hover:bg-indigo-100 mx-1 rounded-sm'>
					<Link to='/'>Home</Link>
				</li>
				<li className='px-5 py-2 hover:bg-indigo-100 mx-1 rounded-sm'>
					<Link to='/about'>About</Link>
				</li>
				<li className='px-5 py-2 hover:bg-indigo-100 mx-1 rounded-sm'>
					<Link to='/article-list'>Articles</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
