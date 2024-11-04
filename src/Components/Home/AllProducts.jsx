import { useParams } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import { useEffect, useState } from "react";
import NoData from "./NoData";

const AllProducts = () => {
  const { category } = useParams();
  const [categoriesProduct, setCategoriesProduct] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => handleChange(data));
  }, [category]);

  const handleChange = (data) => {
    if (category === "allProducts") {
      setCategoriesProduct(data);
    } else {
      const filterData = data.filter((item) => item.category === category);
      setCategoriesProduct(filterData);
    }
  };

  return (
    <div >
      {
        categoriesProduct.length==0?<NoData></NoData>:<div className="grid grid-cols-3 gap-6">
            {
                categoriesProduct
                .map((product) => (
                  <SingleProduct
                    product={product}
                    key={product.product_id}
                  ></SingleProduct>
                ))
                
            }
        </div>
      }
    </div>
  );
};

export default AllProducts;
