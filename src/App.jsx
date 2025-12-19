import { lazy } from 'react'
import Layout from "./components/layouts/Layout"
import Home from "./components/pages/Home"
import GridBackground from './components/layouts/GridBackground'
import Header from './components/Header'

const About = lazy(() => import('./components/pages/About'))

function App() {
    return (
     	<Layout>
			<GridBackground>
				<Header/>
				<Home/>
			</GridBackground>
			<About/>
		</Layout>
    )
}

export default App
