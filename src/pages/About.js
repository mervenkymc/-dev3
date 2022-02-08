import React from "react"
import { Card, Container } from "react-bootstrap"

export const About = (props) => {
  return (
    <Container className="mt-3">
      <Card bg="dark" text={"white"} style={{ width: "100%" }} className="mb-2">
        <Card.Body>
          <Card.Title>Fake Store API</Card.Title>
          <Card.Text>
            fakeStoreApi can be used with any type of shopping project that
            needs products, carts, and users in JSON format. you can use
            examples below to check how fakeStoreApi works and feel free to
            enjoy it in your awesome projects!
          </Card.Text>
        </Card.Body>
      </Card>

      <Container
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-between"
        }}
        className="mt-3"
      >
        {items.map(({ title, exampleCode }) => (
          <Card
            bg="dark"
            text={"white"}
            style={{ width: "18rem" }}
            className="mb-2"
          >
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{exampleCode}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Container>

      <Container
        as={"a"}
        href={"https://github.com/keikaavousi/fake-store-api"}
        className="mt-3"
        target="_blank"
      >
        <Card
          bg="dark"
          text={"white"}
          style={{ width: "100%" }}
          className="mb-2"
        >
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>
              For more info please visit Fake Store Api github repo by click
              here...
            </Card.Title>
          </Card.Body>
        </Card>
      </Container>
    </Container>
  )
}

const items = [
  {
    title: "Get all products",
    exampleCode:
      "fetch('https://fakestoreapi.com/products').then(res=>res.json()).then(json=>console.log(json))"
  },

  {
    title: "Get a single products",
    exampleCode:
      "fetch('https://fakestoreapi.com/products/1').then(res=>res.json()).then(json=>console.log(json))"
  },

  {
    title: "Limit Result",
    exampleCode:
      "fetch('https://fakestoreapi.com/products?limit=5') .then(res=>res.json()).then(json=>console.log(json))"
  },
  {
    title: "Get a single Chart",
    exampleCode:
      "fetch('https://fakestoreapi.com/carts/5').then(res=>res.json()).then(json=>console.log(json))"
  }
]
