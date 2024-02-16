import React from "react";
const CreateOrder = () => {
  return (
    <div>
      {/* top part */}
      <div className="flex justify-between items-center pb-3">
        <h1 className="text-black text-2xl font-semibold">Order</h1>
        <button className="px-3 py-2 bg-blue-400 rounded-md text-white font-semibold">
          Create New
        </button>
      </div>
      <div className="flex justify-between items-center categs bg-white rounded-xl shadow-md p-5 ">
        <div>
          <label htmlFor="#" className="font-semibold text-[18px]">
            What are you Looking For ?
          </label>
          <input
            type="text"
            placeholder="Search for Category, Name, Customer, etc."
            className="px-2 py-2 outline-none border-2 border-gray-300 rounded-md w-80"
          />
        </div>
        <div>
          <label htmlFor="category" className="font-semibold text-[18px]">
            {" "}
            Category
          </label>
          <select
            name="category"
            id="category"
            className="bg-white text-black px-2 py-2 border-2 border-gray-300 rounded-md w-60"
          >
            <option value="name">Name</option>
            <option value="customer">Customer</option>
            <option value="all">All</option>
          </select>
        </div>
        <div>
          <label htmlFor="status" className="font-semibold text-[18px]">
            Status
          </label>
          <select
            name="status"
            id="status"
            className="bg-white text-black px-2 py-2 border-2 border-gray-300 rounded-md w-60"
          >
            <option value="status">Status</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            <option value="all">All</option>
          </select>
        </div>
        <div className="pt-[2rem]">
          <button className="px-4 py-2 bg-blue-400 rounded-md text-white font-semibold">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateOrder;
