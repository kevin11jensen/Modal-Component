import React from 'react';
import styled from 'styled-components';


export function Modal() {
    return (
        <ModalContainer>
            hello from modal container
        </ModalContainer>
    );
}

const ModalContainer = styled.div `
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    overflow: auto;
    background-color: rgba(255, 255, 255, .4);
    display: flex;
    justify-content: center;
    align-items: center;
`