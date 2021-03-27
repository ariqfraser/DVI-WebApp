import React, {useState} from 'react'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import Hero from '../components/hero'
import Feature from '../components/feature'
import '../static/css/global.css'
import About from '../components/about'
import Footer from '../components/footer'
import Vans from '../components/vans'
import FormModal from '../components/form'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const [isModal, setIsModal] = useState(false)

    const modalToggle = () => {
        setIsModal(!isModal);
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} modalToggle={modalToggle}/>
            <FormModal isModal={isModal} modalToggle={modalToggle}/>
            <Navbar  toggle={toggle}  modalToggle={modalToggle}/>
            
            <Hero modalToggle={modalToggle} />
            <Feature />
            <Vans />
            <About />
            <Footer />
        </>
    )
}

export default Home
