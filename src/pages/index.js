import React, {useState} from 'react'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import Hero from '../components/hero'
import Feature from '../components/feature'
import '../static/css/global.css'
import About from '../components/about'
import Footer from '../components/footer'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar  toggle={toggle}  />
            <Hero />
            <Feature />
            <About />
            <About />
            <Footer />
        </>
    )
}

export default Home
