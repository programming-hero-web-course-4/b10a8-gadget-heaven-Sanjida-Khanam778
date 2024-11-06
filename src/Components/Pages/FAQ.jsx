import React from "react";
import { Helmet } from "react-helmet-async";

const FAQ = () => {
  return (
    <div className="">
      <Helmet>
        <title>FAQ || Gadget Heaven</title>
      </Helmet>
      <div>
        <div className=" bg-[#9538E2] text-white">
          <div className="p-32 flex flex-col justify-center items-center gap-6 py-8 mb-12">
            <h1 className="font-bold text-3xl">Frequently Asked Question</h1>
            <p className="w-6/12 text-center mb-4">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
        </div>
        <div className="flex gap-12 px-32 py-12">
          <div className="w-2/3">
            <img className="border rounded-3xl h-full" src="/faq.png" alt="" />
          </div>
          <div className="space-y-1">
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                What types of gadgets do you offer?
              </div>
              <div className="collapse-content">
                <p>
                  We offer a range of tech products, from laptops, phones, and
                  smartwatches to accessories like chargers, cases, and
                  headphones.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                Do you offer international shipping?
              </div>
              <div className="collapse-content">
                <p>
                  Yes, we ship to most countries worldwide. Shipping rates and
                  delivery times may vary based on your location.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                What is the return policy?
              </div>
              <div className="collapse-content">
                <p>
                  We have a 30-day return policy. If you're unsatisfied with
                  your purchase, you can return the item in its original
                  condition for a full refund or exchange.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                How do I track my order?
              </div>
              <div className="collapse-content">
                <p>
                  Once your order is shipped, you will receive a tracking number
                  via email. You can use this number to track the delivery
                  status on our website.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                Are there any warranties on your products?
              </div>
              <div className="collapse-content">
                <p>
                  Yes, most products come with a one-year manufacturer's
                  warranty. Specific warranty details can be found on each
                  product's page or contact us for further information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default FAQ;
