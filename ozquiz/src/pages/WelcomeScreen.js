import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Clock from '../components/Clock'

function WelcomeScreen() {
    return (
        <Container>
            <h1>Wizard of Oz!</h1>
            <Button variant="success">Start Quiz!</Button>
            <Clock />
        </Container>
    )
}

export default WelcomeScreen
