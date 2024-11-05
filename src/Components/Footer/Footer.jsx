const Footer = () => {
    return (
       <div className="p-24 bg-white">
         <div className="pb-8 border-b flex flex-col items-center justify-center">
           <h1 className="pb-3 text-3xl font-bold">Gadget Heaven</h1>
           <p className="font-medium text-black text-opacity-60">Leading the way in cutting-edge technology and innovation.</p>
           </div>
        <footer className="flex justify-around mt-8">
           
  
  <nav className="flex flex-col">
    <h6 className="text-lg font-bold mb-4">Services</h6>
    <a className="font-medium text-black text-opacity-60 leading-8">Product Support</a>
    <a className="font-medium text-black text-opacity-60 leading-8">Order Tracking</a>
    <a className="font-medium text-black text-opacity-60 leading-8">Shipping & Delivery</a>
    <a className="font-medium text-black text-opacity-60 leading-8">Returns</a>
  </nav>
  <nav className="flex flex-col">
    <h6 className="text-lg font-bold mb-4">Company</h6>
    <a className="font-medium text-black text-opacity-60 leading-8">About us</a>
    <a className="font-medium text-black text-opacity-60 leading-8">Careers</a>
    <a className="font-medium text-black text-opacity-60 leading-8">Contact</a>
  </nav>
  <nav className="flex flex-col">
    <h6 className="text-lg font-bold mb-4">Legal</h6>
    <a className="font-medium text-black text-opacity-60 leading-8">Terms of Services</a>
    <a className="font-medium text-black text-opacity-60 leading-8">Privacy Policy</a>
    <a className="font-medium text-black text-opacity-60 leading-8">Cookie Policy</a>
  </nav>
 
</footer>
       </div>
    );
};

export default Footer;