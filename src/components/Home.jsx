import React from "react";
import CreateOrder from "./CreateOrder";
import OrderSummery from "./OrderSummery";

const Home = () => {
  return (
    <div className="shadow-md bg-gray-50 max-w-[1250px] m-auto px-2 py-2">
      <CreateOrder />
      <OrderSummery />
    </div>
  );
};

export default Home;
