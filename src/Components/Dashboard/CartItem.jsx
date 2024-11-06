
const CartItem = ({ product }) => {
//   console.log(product);
  const { product_title, product_image, price, description } = product;
  
//   console.log(total)
  return (
    <div className="bg-white mb-6 p-8 grid grid-cols-5 rounded-3xl gap-8">
      <div className=" h-32 xl:w-52">
        <img className="h-full w-full object-cover rounded-xl" src={product_image} alt="" />
      </div>
      <div className="col-span-4">
        <div className="flex justify-between">
          <h1 className="font-semibold text-2xl">{product_title}</h1>

          <img
            className="p-2 rounded-full border-2 border-red-500"
            src="/delete.png"
            alt=""
          />
        </div>
        <p className="mt-3 mb-4 text-lg text-black text-opacity-60">{description}</p>
        <p className="font-semibold text-xl">Price: $ {price}</p>
      </div>
    </div>
  );
};

export default CartItem;
