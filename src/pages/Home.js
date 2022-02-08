import React from "react"
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"
export const Home = () => {
  return (
    <Container>
      <div className="container-fluid bg-light text-dark p-5">
        <div className="container bg-light p-5">
          <h1 className="display-4 fw-bold">WELCOME TO OUR ONLINE STORE</h1>
          <hr />
          <p>Let's shopping</p>
          <Link className="btn btn-primary" to="/products">
            Click me!
          </Link>
        </div>
      </div>
    </Container>
  )
}
