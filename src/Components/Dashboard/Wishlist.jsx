import { useEffect, useState } from "react";
import { getAllWishItems } from "../Utilities/Index";
import WishItems from "./WishItems";

const Wishlist = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const wishItems = getAllWishItems();
        setProducts(wishItems);
    }, []);
    console.log(products)

    return (
        <div className="px-32">
            {
                products.map(item=><WishItems key={item.product_id} product={item}></WishItems>)
            }
            
        </div>
    );
};

export default Wishlist;