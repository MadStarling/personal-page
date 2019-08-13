import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App-content">
      <img src="logo192.png" className="App-logo" alt="logo"/>
      <h1>MadStarling</h1>
      <h6>There is insanity in all of us</h6>
        <Container>
          <Row className="Answers-row">
            <b>What are you looking for?</b>
          </Row>
          <Row className="Answers-row">
            <ButtonGroup size="sm" className="mt-3">
              <Button>Option A</Button>
              <Button>Option B</Button>
            </ButtonGroup>
          </Row>
        </Container>
    </div>
  );
}

export default App;