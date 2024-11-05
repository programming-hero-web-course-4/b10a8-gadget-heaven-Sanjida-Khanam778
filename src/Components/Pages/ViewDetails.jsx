import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addCart } from "../Utilities/Index";

const ViewDetails = () => {
  const [data, setData] = useState(false);
  const { productId } = useParams();

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((datas) => handleFind(datas));
  }, [productId]);

  const handleFind = (datas) => {
    const findData = datas.find((item) => item.product_id == productId);
    setData(findData);
  };

  if (!data) {
    return "";
  }
  const handleAddToCart = (data) => {
    toast.success("Item Added to Cart", {
      hideProgressBar: true,
      position: "top-center",
    });
    addCart(data)
  };

  const handleAddToWishlist = () => {
    toast.success("Item added to wishlist", {
      hideProgressBar: true,
      position: "top-center",
    });
  };

  return (
    <div>
      <ToastContainer></ToastContainer>
      <div className=" flex flex-col">
        <div className="bg-[#9538E2] pb-60 text-white flex flex-col justify-center items-center gap-4 py-8">
          <h1 className="font-bold text-3xl">Product Details</h1>
          <p className="w-6/12 text-center">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>

        <div className="relative bottom-52 border bg-white mx-32 p-8 rounded-3xl grid grid-cols-5 gap-8">
          <div className="col-span-2">
            <img className="h-full rounded-2xl" src={data.product_image} />
          </div>
          <div className="col-span-3 text-black">
            <h1 className="text-3xl font-semibold mb-3">
              {data.product_title}
            </h1>

            <h3 className="text-xl font-semibold text-black text-opacity-80 mb-4">
              Price: $ {data.price}
            </h3>
            <div className="border inline rounded-[32px] border-[#309C08] text-[#309C08] font-medium text-sm bg-[#309C08] bg-opacity-10 px-[14px] py-[7px]">
              In Stock
            </div>
            <p className="my-4 text-lg text-black text-opacity-60">
              {data.description}
            </p>
            <p className="font-bold text-lg mb-3">Specification:</p>
            {data.Specification
              ? data.Specification.map((item, idx) => (
                  <ol key={idx}>
                    <li className="text-black text-opacity-60 text-lg leading-8">{`${
                      idx + 1
                    }. ${item}`}</li>
                  </ol>
                ))
              : ""}
            <p className="text-lg font-bold my-4">Rating ⭐</p>
            <div className="flex items-center gap-4">
              <ReactStars
                size={30}
                value={data.rating}
                edit={false}
                isHalf={true}
              />
              <p className="text-sm font-medium px-[14px] py-[7px] rounded-[32px] bg-[#09080F] bg-opacity-5">
                {data.rating}
              </p>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <button
                onClick={()=>handleAddToCart(data)}
                className="text-lg font-bold px-5 py-3 bg-[#9538E2] rounded-[32px] text-white"
              >
                Add To card{" "}
                <img
                  className="inline ml-2 text-white"
                  src="/cart2.png"
                  alt=""
                />
              </button>

              <button onClick={handleAddToWishlist}>
                <img
                  className="border rounded-full p-4"
                  src="/love.png"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
