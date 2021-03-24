import React, {useState} from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Sidebar from '../components/sidebar'

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
            
        </>
    )
}

export default Home
