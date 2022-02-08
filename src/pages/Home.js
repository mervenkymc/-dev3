import React from "react"
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"
export const Home = () => {
  return (
    <Container>
      <div className="container-fluid bg-light text-dark p-5">
        <Link className="btn btn-primary" to="/products">
          Click me!
        </Link>
      </div>
    </Container>
  )
}
