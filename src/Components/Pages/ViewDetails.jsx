// import { useLoaderData } from "react-router-dom";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewDetails = () => {
    const [data, setData] = useState([])
    const {productId} = useParams()

    useEffect(()=>{
        fetch('/products.json')
        .then(res=>res.json())
        .then(datas=>handleFind(datas))
    },[productId])
    const handleFind = (datas)=>{

        const findData = datas.find(item=>item.product_id==productId)
        setData(findData)
    }
    console.log(data)
    return (
        <div>
            <div className=" flex flex-col">
            <div className="bg-[#9538E2] pb-60 text-white flex flex-col justify-center items-center gap-4 py-8">
            <h1 className="font-bold text-3xl">Product Details</h1>
            <p className="w-6/12 text-center">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
           
           <div className="relative bottom-52 border bg-white mx-32 p-8 rounded-3xl grid grid-cols-3">
                
                <div className="col-span-1 h-[500px]">
                    <img className="h-full rounded-2xl border" src={data.product_image} alt="" />
                </div>
                <div className="col-span-2">

                </div>
           </div>
        </div>
        </div>
    );
};

export default ViewDetails;