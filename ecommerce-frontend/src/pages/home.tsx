import { Link } from "react-router-dom"
import ProductCard from "../components/product-card"

const Home = () => {

  const addToCartHandler = ()=>{};

  return (
    <div className="home">
      <section></section>

      <h1>Latest Products

        <Link to="/search" className="findmore">More</Link>
      </h1>

      <main>
        <ProductCard
         productId="abc"
         name ="Macbook"
         price={454545}
         stock={32}
         handler={addToCartHandler}
         photo="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685966374/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256711_umnwok.png"
         />
      </main>

    </div>
  )
}

export default Home