import React from "react"
import {
  ProgressBar,
  Container,
  InputGroup,
  FormControl
} from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { ProductCard } from "../components/ProductCard"
import { productsEndPointURI } from "../apiconfig"
import axios from "axios"
export const Products = () => {
  const [products, setProducts] = React.useState([])
  const [searchingProduct, setSearchingProduct] = React.useState([])
  const [isSearching, setIsSearching] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  const searchBarInputChanges = (e) => {
    setIsSearching(true)
    if (e.currentTarget.value.length === 0) {
      setIsSearching(false)
      setSearchingProduct([])
      return
    }
    const newArr = products.filter((obj) => {
      return (
        obj.title.toLowerCase().includes(e.currentTarget.value) ||
        obj.title.includes(e.currentTarget.value)
      )
    })
    setSearchingProduct(newArr)
  }

  const getAllProducst = async () => {
    setLoading(true)
    try {
      const productResponse = await axios.get(productsEndPointURI)
      const productData = productResponse.data
      setProducts(productData)

      setLoading(false)
      return productData
    } catch (e) {
      setLoading(false)
      alert(e)
    }
  }
  React.useEffect(() => {
    getAllProducst()
  }, [])

  const navigate = useNavigate()

  const handleProductClick = (productId) => {
    const productIdLink = `/product/${productId}`
    navigate(productIdLink)
  }
  if (loading) return <ProgressBar animated now={100} />
  if (!products && !loading) return <div>Products not found..</div>
  return (
    <Container>
      <InputGroup className="mb-3 mt-3">
        <FormControl
          placeholder="Search for product..."
          onChange={(e) => searchBarInputChanges(e)}
          aria-label="product-input"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <Container className="d-flex justify-content-center flex-wrap ">
        {isSearching
          ? searchingProduct.map(
              ({ id, price, category, title, image }, index) => (
                <ProductCard
                  key={index}
                  imgUrl={image}
                  onClick={() => handleProductClick(id)}
                  id={id}
                  category={category}
                  title={title}
                  price={price}
                />
              )
            )
          : products.map(
              ({ id, price, category, title, description, image }, index) => (
                <ProductCard
                  key={index}
                  imgUrl={image}
                  onClick={() => handleProductClick(id)}
                  id={id}
                  category={category}
                  title={title}
                  price={price}
                />
              )
            )}
      </Container>
    </Container>
  )
}
