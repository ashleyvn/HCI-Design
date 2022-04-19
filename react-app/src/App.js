import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Overview from './pages/overview';
import Implementation from './pages/implementation';
import Validation from './pages/validation';
import Charts from './pages/charts';
import Data from './pages/data';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/' exact element={<Home/> } />
		<Route path='/overview' element={<Overview/> } />
		<Route path='/implementation' element={<Implementation/> } />
		<Route path='/validation' element={<Validation/> } />
		<Route path='/charts' element={<Charts/> } />
		<Route path='/data' element={<Data/> } />
	</Routes>
	</Router>
);
}

export default App;
