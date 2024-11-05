import { useContext } from "react";
import { MyContext } from "../Pages/ViewDetails";
import { useLocation } from "react-router-dom";
import Cart from "./Cart";
import Wishlist from "./Wishlist";

const ListItems = () => {
    const value = useContext(MyContext);
    const {pathname} = useLocation()
    console.log(value)

    return (
        <div>
            {
                pathname.includes('cart')?<Cart></Cart>:<Wishlist></Wishlist>
            }
        </div>
    );
};

export default ListItems;