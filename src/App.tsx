import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import seal from "./CC_Seal_Red.jpg";

function App(): JSX.Element {
    return (
        <div className="App">
            <h1 className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <Container>
                <Row>
                    <Col>
                        <div className="red_rec"></div>
                        <p>First column.</p>
                        <p>My Name is: Matthew Bonham</p>
                        <p>I say: &quot;Hello World&quot;</p>
                        <img
                            className="default_image"
                            src={seal}
                            alt="Craven County NC Seal, in red"
                        />
                    </Col>
                    <Col>
                        <div className="red_rec"></div>
                        <p>Second column.</p>
                        <ul>
                            <p>
                                <b>My Work Roles:</b>
                            </p>
                            <li>Instructor @ UDel</li>
                            <li>Sys Admin @ Craven County</li>
                            <li>Software Engineer @ USG</li>
                        </ul>
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
