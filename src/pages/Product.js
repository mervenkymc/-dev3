import React from "react"
import { useParams } from "react-router-dom"
import { NotFound404 } from "./NotFound404"
import { Container, ProgressBar } from "react-bootstrap"
import { ProductCard } from "../components/ProductCard"
import axios from "axios"
import { productsEndPointURI } from "../apiconfig"
export const Product = () => {
  const { productId } = useParams()
  const [product, setProduct] = React.useState(null)
  const [loading, setLoading] = React.useState(false)

  const getProduct = React.useCallback(async () => {
    setLoading(true)
    try {
      const productResponse = await axios.get(
        `${productsEndPointURI}/${productId}`
      )
      const productData = productResponse.data
      setProduct(productData)

      setLoading(false)
      return productData
    } catch (e) {
      alert(e)

      setLoading(false)
    }
  }, [productId])

  React.useEffect(() => {
    getProduct()
  }, [getProduct])

  if (loading) return <ProgressBar animated now={100} />
  if (!loading && !product) return <NotFound404 product />
  return (
    <Container
      style={{ display: "flex" }}
      className="justify-content-md-center mt-3"
    >
      <ProductCard
        id={product.id}
        description={product.description}
        category={product.category}
        price={product.price}
        title={product.title}
        imgUrl={product.image}
      />
    </Container>
  )
}
