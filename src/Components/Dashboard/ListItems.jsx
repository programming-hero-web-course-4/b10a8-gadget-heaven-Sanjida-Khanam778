import { useLocation } from "react-router-dom";
import Cart from "./Cart";
import Wishlist from "./Wishlist";

const ListItems = () => {
    const {pathname} = useLocation()
    return (
        <div>
            {
                pathname.includes('cart')?<Cart></Cart>:<Wishlist></Wishlist>
            }
        </div>
    );
};

export default ListItems;