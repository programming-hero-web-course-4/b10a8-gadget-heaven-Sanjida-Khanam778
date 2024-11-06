const WishItems = ({ product }) => {
  const { product_title, product_image, price, description } = product;

  return (
    <div className="bg-white rounded-3xl mb-6 p-8 grid grid-cols-5 gap-8">
      <div className="">
        <img
          className="h-full w-full object-cover rounded-xl"
          src={product_image}
          alt=""
        />
      </div>
      <div className="col-span-4">
        <div className="flex justify-between">
          <h1 className="font-semibold text-2xl text-black">{product_title}</h1>

          <img
            className="p-2 rounded-full border-2 border-red-500"
            src="/delete.png"
            alt=""
          />
        </div>
        <p className="mt-3 mb-4 text-lg text-black text-opacity-60">
          <span className="text-black font-semibold">Description: </span>{description}
        </p>
        <p className="font-semibold text-xl">Price: $ {price}</p>
        <button
          className={`mt-4 text-lg font-bold px-5 py-3 bg-[#9538E2] rounded-[32px] text-white`}
        >
          Add To card
        </button>
      </div>
    </div>
  );
};

export default WishItems;
