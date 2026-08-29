import { lazy } from 'react'
import Layout from "@/components/Layout"
import Header from '@/components/Header'

const About = lazy(() => import('@/components/pages/About'))
const Home = lazy(() => import('@/components/pages/Home'))
const TechTools = lazy(() => import('@/components/pages/page-extensions/TechTools'))
const TechStack = lazy(() => import('@/components/pages/page-extensions/TechStack'))
const Projects = lazy(() => import('@/components/pages/Projects'))
const Footer = lazy(() => import('@/components/Footer'))
const Contact = lazy(() => import('@/components/pages/Contact'))

function App() {
    return (
		<>
			<Layout>
				<Header/>
				<Home/>
				<About/>
				<TechTools/>
				<TechStack/>
				<Projects/>
				<Contact/>
			</Layout>
			<Footer/>
		</>
    )
}

export default App
