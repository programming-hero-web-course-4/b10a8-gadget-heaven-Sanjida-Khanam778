import { toast } from "react-toastify"

const getAllCartItems =()=>{
    const allItems = localStorage.getItem('cart')
    // console.log(allItems)
    if(allItems){
        const allCartItems = JSON.parse(allItems)
        return allCartItems
    }
    else{
        console.log([])
        return []
    }
}

const addCart = (product) => {
  const cartItems = getAllCartItems()
  const isExist = cartItems.find(item=> item.product_id === product.product_id)
  if(isExist){
    return toast.error("Item already added", {
        hideProgressBar: true,
        position: "top-center",
      })
  }
  cartItems.push(product)
  localStorage.setItem('cart', JSON.stringify(cartItems))
  toast.success("Item Added to Cart", {
    hideProgressBar: true,
    position: "top-center",
  });
}

export {addCart, getAllCartItems}