import React, {useState} from 'react'
import FormModal from '../components/form'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'


const Flavours = () => {
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
            <h2>Flavours</h2>
            
        </>
    )
}

export default Flavours
