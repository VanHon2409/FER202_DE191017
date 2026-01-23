import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Login() {
  return (
    <Container fluid className="login-wrapper">
      <Row className="h-100">
        {/* LEFT */}
        <Col
          lg={6}
          className="d-none d-lg-flex flex-column justify-content-between p-5 login-left"
        >
          <div className="d-flex align-items-center gap-3">
            <div className="brand-box">■</div>
            <h4 className="fw-bold mb-0">Workflow</h4>
          </div>

          <div>
            <h1 className="fw-bold display-4">
              Empowering your <span className="highlight">workflow.</span>
            </h1>
            <p className="text-light opacity-75 mt-3">
              The all-in-one platform for modern professionals. Streamline your
              tasks, collaborate in real-time, and scale your impact.
            </p>
          </div>

          <p className="opacity-75">
            Join over 10,000+ professionals
          </p>
        </Col>

        {/* RIGHT */}
        <Col
          lg={6}
          className="d-flex align-items-center justify-content-center login-right p-4"
        >
          <div className="login-card">
            <h2 className="fw-bold mb-2">Welcome Back</h2>
            <p className="text-secondary mb-4">
              Please enter your details to sign in.
            </p>

            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@company.com"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="••••••••"
                />
              </Form.Group>

              <div className="d-flex justify-content-between align-items-center mb-4">
                <Form.Check label="Remember me" />
                <a href="#" className="text-success fw-semibold">
                  Forgot password?
                </a>
              </div>

              <Button type="submit" className="w-100 py-2 mb-4">
                Sign In →
              </Button>

              <hr className="text-secondary" />

              <div className="d-flex gap-3">
                <Button variant="outline-light" className="w-50">
                  Google
                </Button>
                <Button variant="outline-light" className="w-50">
                  GitHub
                </Button>
              </div>

              <p className="text-center text-secondary mt-4">
                Don’t have an account?
                <a href="#" className="text-success fw-bold ms-1">
                  Sign up for free
                </a>
              </p>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
