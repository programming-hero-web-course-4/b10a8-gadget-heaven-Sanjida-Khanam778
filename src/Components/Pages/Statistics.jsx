import { Helmet } from "react-helmet-async";

const Statistics = () => {
  return (
    <div >
      <Helmet>
        <title>Statistics || Gadget Heaven</title>
      </Helmet>
      <div className=" bg-[#9538E2] text-white">
      <div className="p-32 flex flex-col justify-center items-center gap-4 py-8 mb-12">
        <h1 className="font-bold text-3xl">Statistics</h1>
        <p className="w-6/12 text-center mb-4">
        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
        </p>

      </div>
      </div>
        <h1 className="text-5xl font-bold text-center">
          No Data to Show Statistics
        </h1>
    </div>
  );
};

export default Statistics;
