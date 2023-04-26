import React from "react";
import { Button, Container, Form, FormCheck } from "react-bootstrap";
import { Link } from "react-router-dom";
import useLoginState from "../../../useState/auth/useLoginState";

const DataLayout = () => {
  const {onLogin} = useLoginState();
  return (
    <>
      <Container className="box-content-login">
        <Form.Group className="input-layout">
          <h2 style={{ marginTop: "1.5rem" }}>Sign In</h2>
          <Form.Control
            type="email"
            className="input"
            placeholder="อีมเมล์หรือเบอร์โทรศัพท์"
          />
          <Form.Control
            type="password"
            className="input"
            placeholder="รหัสผ่าน"
          />
          <Link to={"/home"} style={{textDecoration:"none"}}>
            <Button onClick={onLogin} type="submit" className="btn-danger btn-login">
              Login
            </Button>
          </Link>
          <FormCheck
            type="checkbox"
            label="จดจำฉัน"
            style={{ marginTop: "1rem" }}
          />
          <div className="text-des-login">
            <h5>New to Netflix? Sign up now.</h5>
            <p>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. Learn more.
            </p>
          </div>
        </Form.Group>
      </Container>
    </>
  );
};

export default DataLayout;
