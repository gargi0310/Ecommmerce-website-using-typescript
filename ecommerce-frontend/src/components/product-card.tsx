import { FaPlus } from "react-icons/fa";
import pic from "../assets/cover.png"

type ProductsProps = {
  productId:string;
  name:string;
  price:number;
  stock:number;
  photo:string;
  handler:()=>void;
}

const server = "skdfhdskkjfsk";

const ProductCard = ({productId,photo, name, price, stock, handler}:ProductsProps) => {
  return (
    <div className="product-card">

    <p>{name}</p>
    <img src={photo} alt="" />
    <span> ₹{price} </span>

    <div>
      <button onClick={()=>handler()}> <FaPlus/> </button>
    </div>
  </div>
  )
}

export default ProductCard