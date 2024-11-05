const Cart = () => {
  const handleSort=()=>{
    
  }
    return (
        <div>
            
            <div className="flex justify-between items-center px-32 mb-8">
        <div className="font-bold text-2xl">Cart</div>
        <div className="flex items-center">
          <p className="font-bold text-2xl mr-8">Total cost:</p>

          <button onClick={handleSort} className="px-5 py-3 rounded-[32px] text-lg font-semibold border-2 mr-4 border-[#9538E2]">
            Sort by Price <img className="inline ml-2" src="/sort.png" alt="" />
          </button>

          <button className="px-5 py-3 rounded-[32px] text-lg font-medium bg-gradient-to-b from-[#9538E2] via-[#9538E2] to-pink-400 text-white">
            Purchase
          </button>
        </div>
      </div>
        </div>
    );
};

export default Cart;