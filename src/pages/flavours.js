import React, {useState} from 'react'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'

const Flavours = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar  toggle={toggle}  />
            <h2>Flavours</h2>
            
        </>
    )
}

export default Flavours
