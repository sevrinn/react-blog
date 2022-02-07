import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ArticlePage from './pages/ArticlePage'
import ArticleList from './pages/ArticleList'
import Navbar from './Navbar'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<div className='container p-20'>
					<Routes>
						<Route path='/' element={<HomePage />} exact />
						<Route path='/about' element={<AboutPage />} />
						<Route path='/article-list' element={<ArticleList />} />
						<Route path='/article' element={<ArticlePage />} />
					</Routes>
				</div>
			</div>
		</Router>
	)
}

export default App
