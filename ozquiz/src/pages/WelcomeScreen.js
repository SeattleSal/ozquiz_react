import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

function WelcomeScreen() {
    return (
        <Container>
            <h1>Wizard of Oz!</h1>
            <Button variant="success">Start Quiz!</Button>
        </Container>
    )
}

export default WelcomeScreen
