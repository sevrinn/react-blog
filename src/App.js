import HomePage from './pages/HomePage'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
	return (
		<Router>
			<div className='container p-2'>
				<Routes>
					<Route path='/' element={<HomePage />} exact />
				</Routes>
			</div>
		</Router>
	)
}

export default App
