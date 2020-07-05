import React, { useState } from 'react';
import styled from 'styled-components';
import modalImg from '../assets/images/modal-image.jpg';

export function Landing() {

    const [modal, setModal] = useState(false);

    const toggleModal = e => {
        setModal(!modal);
    }
    
    return (
        <LandingContainer>
            <div className = 'card'>
                <img src = {modalImg} alt = 'modal' />
                <button>Open Modal</button>
            </div>
        </LandingContainer>
    );
}

const LandingContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;

    .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 1px solid black;
        margin: 3%;
        width: 33%;
        img {
            width: 90%;
            margin: 3%;
        }
        button {
            background: transparent;
            font-size: 1.6rem;
            border: 1px solid black;
            padding: 2% 5%;
            margin-bottom: 3%;
            &:hover {
                background-color: black;
                color: white;
            }
        }
    }
`