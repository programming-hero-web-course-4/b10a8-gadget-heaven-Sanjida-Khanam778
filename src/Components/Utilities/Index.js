import { toast } from "react-toastify"

const getAllCartItems =()=>{
    const allItems = localStorage.getItem('cart')
    // console.log(allItems)
    if(allItems){
        const allCartItems = JSON.parse(allItems)
        return allCartItems
    }
    else{
        return []
    }
}

const addCart = (product) => {
  const cartItems = getAllCartItems()
  const isExist = cartItems.find(item=> item.product_id === product.product_id)
  if(isExist){
    return toast.error("Item already added to cart", {
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

const getAllWishItems =()=>{
    const getWishItems = localStorage.getItem('wishlist')
    if(getWishItems){
        const allWishItems = JSON.parse(getWishItems)
        return allWishItems
    }
    else{
        return []
    }
}

const addWishlist = (product) => {
    const wishItems = getAllWishItems()
    const isExist = wishItems.find(item=> item.product_id == product.product_id)
    if(isExist){
      return toast.error("Item already added to wishlist", {
          hideProgressBar: true,
          position: "top-center",
        })
    }
    wishItems.push(product)
    localStorage.setItem('wishlist', JSON.stringify(wishItems))
    toast.success("Item Added to Wishlist", {
      hideProgressBar: true,
      position: "top-center",
    });
  }

  const removeItem = ()=>{
    localStorage.removeItem('cart')
  }

export {addCart, getAllCartItems, addWishlist, getAllWishItems, removeItem}