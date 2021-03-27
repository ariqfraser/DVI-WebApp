import React from 'react'
import { Button } from '../button.elements'
import styled from 'styled-components'
import logo from '../../static/images/logo.png'
import {FaTimes} from 'react-icons/fa'

const FormModal = ({isModal, modalToggle}) => {

    const Modal = styled.div`
        width: 100%;
        height: 100%;
        position: fixed;
        background-color: rgba(0,0,0,0.5);
        z-index: 200;
        justify-content: center;
        align-items: center;
        display: ${({isModal}) => (isModal ? 'flex' : 'none')};
        
    `
    const FormWrapper = styled.form`
        background-color: #fff;
        width: 600px;
        padding: 32px 64px;
        border-radius: 1rem;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        @media and screen and (max-width:768px ){
            width: 100%
        }

        & h2 {
            color: #EB697F;
            margin: 0;
        }

        & img {
            width: 200px;
            margin: 0;
        }

        & p {
            font-size: 1.2rem;
        }

        & input {
            border: 2px solid #EB697F;
            border-radius: 8px;
            font-size: 1.5rem;
            padding: 8px 1rem;
            width: 400px;
            margin-bottom: 1rem;
        }
    `

    const CloseIcon = styled(FaTimes)`
        color: #EB697F;
        cursor: pointer;
        font-size: 2rem;
        right: 1rem;
        top: 1rem;
        position: absolute;
    `
    return (
        <>
            <Modal isModal={isModal}>
                <FormWrapper>
                    <CloseIcon onClick={modalToggle} />
                    <img src={logo} alt=''/>
                    <h2>Stay in touch!</h2>
                    <p>Stay up to date and sign up for our newsletter!</p>
                    <input type='mail' placeholder='Enter your email!' />
                    <Button to='/'>Sign Up!</Button>
                </FormWrapper>
            </Modal>
        </>
    )
}

export default FormModal
