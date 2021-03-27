import React, {useState} from 'react'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import FormModal from '../components/form'

const Events = () => {
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
            <h2>Events</h2>
            
        </>
    )
}

export default Events
