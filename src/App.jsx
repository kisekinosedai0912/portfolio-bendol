import { lazy } from 'react'
import Layout from "./components/layouts/Layout"
import Header from './components/Header'

const About = lazy(() => import('./components/pages/About'))
const GridBackground = lazy(() => import('./components/layouts/GridBackground'))
const Home = lazy(() => import('./components/pages/Home'))
const Projects = lazy(() => import('./components/pages/Projects'))
const Footer = lazy(() => import('./components/Footer'))
const Contact = lazy(() => import('./components/pages/Contact'))

function App() {
    return (
		<>
			<Layout>
				<GridBackground>
					<Header/>
					<Home/>
				</GridBackground>
				<About/>
				<Projects/>
				<Contact/>
			</Layout>
			<Footer/>
		</>
    )
}

export default App
