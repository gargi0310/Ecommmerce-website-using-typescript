import { useEffect, useState } from "react";
import { VscError } from 'react-icons/vsc';
import CartItem from "../components/cart-item";
import { Link } from "react-router-dom";

const cartItems = [

  {
    productid:"asasaa",
    photo:"https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685966374/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256711_umnwok.png",
    name:"MacBookk",
    price:300000,
    quantity:4,
    stock:10
  }
];


const subtotal = 4000;
const tax = Math.round(subtotal * 0.18 );
const shippingCharges  = 200;
const total = subtotal + shippingCharges + tax;
const discount = 400;

const Cart = () => {

  const [coupenCode , setCoupenCode] = useState<string>("");
  const [isValidcoupenCode , setisValidCoupenCode] = useState<boolean>(false);


  useEffect(()=>{


    const timeOutId = setTimeout(()=>{
      if(Math.random()>0.5){
        setisValidCoupenCode(true);
      }
      else{
        setisValidCoupenCode(false);
      }
    }, 1000)


    return ()=>{
      clearTimeout(timeOutId);
      setisValidCoupenCode(false);
    }

  }, [coupenCode])

  return (
    <div className='cart'>
      <main>

      {
        cartItems.length >  0  ? cartItems.map((i, idx)=>(
          <CartItem key={idx} cartItem={i} />
        )): <h1>No Items Added</h1>
      }
      
      </main>
      <aside>
        <p>Subtotal: ₹{subtotal}</p>
        <p>Shipping Charges: ₹{shippingCharges}</p>
        <p>Tax: ₹{tax}</p>
        <p>
          Discount:  <em className="red"> - ₹{discount}</em>
        </p>
        <p>
          <b>Total: ₹{total} </b>
        </p>
        <input type="text" placeholder="Coupon Code" value={coupenCode} onChange={(e)=>setCoupenCode(e.target.value)} 
        />

        {
          coupenCode && 
          (isValidcoupenCode ? (
            <span className="green">
              ₹{discount} off using the <code>{coupenCode}</code>
            </span>
          ):(
            <span className="red">Invalid Coupon <VscError/></span>
          ))
        }


        {
          cartItems.length > 0 && <Link to="/shipping">Checkout</Link>
        }

      </aside>
    </div>
  )
}

export default Cart