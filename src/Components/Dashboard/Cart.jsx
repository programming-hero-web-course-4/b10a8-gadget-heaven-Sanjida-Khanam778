import { useEffect, useState } from "react";
import { getAllCartItems, removeItem } from "../Utilities/Index";
import CartItem from "./CartItem";
import {useNavigate} from 'react-router-dom'

const Cart = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState(0);
  const [isPurchase, setIsPurchase] = useState(false)

  useEffect(() => {
    const cartItems = getAllCartItems();
    setProducts(cartItems);
    const totalPrice = cartItems.reduce((a, i) => a + i.price, 0);
    setPrice(totalPrice);
    if(cartItems.length===0 && price===0){
      setIsPurchase(true)
    }
  }, []);
  
  const handleSort = () => {
    const sortedData = [...products].sort((a, b) => b.price - a.price);
    setProducts(sortedData);
  };

  const handleModal = ()=>{
    navigate('/')
    setPrice(0)
    removeItem()
  }  

  return (
    <div>
      <div className="flex justify-between items-center px-32 mb-8">
        <div className="font-bold text-2xl">Cart</div>
        <div className="flex items-center">
          <p className="font-bold text-2xl mr-8">Total cost: {price}</p>

          <button
            onClick={handleSort}
            className="px-5 py-3 rounded-[32px] text-lg font-semibold border-2 mr-4 border-[#9538E2]"
          >
            Sort by Price <img className="inline ml-2" src="/sort.png" alt="" />
          </button>

          <button
          disabled={isPurchase}
            onClick={() => document.getElementById("my_modal_1").showModal()}
            className={`px-5 py-3 rounded-[32px] text-lg font-medium  text-white ${isPurchase?'bg-gray-300':'bg-gradient-to-b from-[#9538E2] via-[#9538E2] to-pink-400'}`}
          >
            Purchase
          </button>
        </div>
      </div>
      <dialog id="my_modal_1" className="modal">
        <div className="bg-white rounded-2xl p-8 flex flex-col justify-center items-center">
          <img className="mb-6" src="/Group.png" alt="" />
          <h3 className="font-bold text-2xl pb-3 border-b">
            Payment Successfully
          </h3>
          <p className="py-4 text-black text-opacity-60 font-medium">
            Thanks for purchasing.
          </p>
          <p className=" text-black text-opacity-60 font-medium">
            Total: {price}
          </p>
          <div className="w-full">
            <form method="dialog" className='w-full mt-4'>
             
              <button onClick={()=>handleModal()} className="btn rounded-[32px] w-full text-black">Close</button>
              
            </form>
          </div>
        </div>
      </dialog>
      <div className="px-32">
        {products.map((item) => (
          <CartItem key={item.product_id} product={item}></CartItem>
        ))}
      </div>
    </div>
  );
};

export default Cart;
