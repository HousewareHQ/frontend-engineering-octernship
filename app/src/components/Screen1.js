import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Screen1 = ({ text, setText }) => {
  const [showWarning, setShowWarning] = useState(false);

  const validateText = (text) => {
    if (text.trim().length > 0) return true;
    return false;
  };

  const handleOnTextChange = (e) => {
    setText(e.target.value);
    setShowWarning(validateText(e.target.value) ? false : true);
  };
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        style={{
          width: "300px",
          border: "1px solid grey",
          padding: "1rem",
          height: "250px",
          borderRadius: "1rem",
        }}
      >
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>Screen 1</Card.Title>

          <div style={{ border: "1px solid lightgray", margin: "1rem 0" }} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <Form.Label htmlFor="inputString">Input String</Form.Label>
            <Form.Control
              id="inputString"
              aria-describedby="block"
              value={text}
              onChange={handleOnTextChange}
            />
            {showWarning && (
              <Form.Text id="block" muted style={{ color: "red" }}>
                The input field can't be empty or filled with empty spaces
              </Form.Text>
            )}
            {showWarning || text == "" ? (
              <Button style={{ margin: "1rem 0" }} variant="primary">
                Go to Screen 2
              </Button>
            ) : (
              <Link to="/Screen2" style={{ margin: "1rem 0" }}>
                <Button variant="primary" style={{ width: "100%" }}>
                  Go to Screen 2
                </Button>
              </Link>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
