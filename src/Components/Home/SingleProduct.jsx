import { Link, useNavigate } from "react-router-dom";

const SingleProduct = ({ product }) => {
  
  const navigate = useNavigate()
  const { product_image, product_title, price, product_id } = product;

  return (
    <div className="p-5 rounded-2xl flex flex-col bg-white">
      <img className="rounded-xl mb-6 h-40" src={product_image} alt="" />
      <h1 className="text-2xl font-semibold">{product_title}</h1>
      <p className="text-lg font-medium mt-3 mb-4 flex-grow text-black text-opacity-60">Price: {price}k</p>
      <Link>
        <button onClick={()=> navigate(`/details/${product_id}`)} className="inline-flex px-5 py-3 border-2 text-lg font-semibold text-[#9538E2] border-[#9538E2] rounded-[32px]">View Details</button>
      </Link>
    </div>
  );
};

export default SingleProduct;
