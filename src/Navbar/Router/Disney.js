import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 90vw;
    max-width: 100%;
    padding: 1rem;
    margin: 0 auto;
    color: white;

    h1{
        font-size: 2rem;
    }
`;

const Disney = () => {
    return (
        <Container>
            <h1> This is Disney component </h1>
        </Container>
    )
}

export default Disney