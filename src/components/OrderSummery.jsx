import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight, FaEdit } from "react-icons/fa";
import data from "./data.js";

const OrderSummery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;
  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / pageSize);

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div className="container mx-auto bg-white shadow-md mt-10 rounded-md pb-8">
      <div className="flex justify-between items-center p-4">
        <span className="text-2xl font-semibold mb-4">Product Summary</span>
        <div className="flex items-center gap-3">
          <label htmlFor="Show all">Show All</label>
          <select
            name="category"
            id="category"
            className="bg-white text-black px-2 py-2 border-2 border-gray-300 rounded-md"
          >
            <option value="name">Name</option>
            <option value="customer">Customer</option>
            <option value="all">All</option>
          </select>
        </div>
        <div>
          <button className="px-3 py-2 bg-blue-400 text-white font-semibold rounded-md border-none">
            Dispatched Selected
          </button>
        </div>
      </div>
      <div className="overflow-x-auto px-4">
        <table className="table-auto border-collapse border  w-full">
          <thead>
            <tr className="bg-white">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Source ID</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Customer</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Country</th>
              <th className="px-4 py-2">Shipping</th>
              <th className="px-4 py-2">Source</th>
              <th className="px-4 py-2">Order Type</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id}>
                <td className="border px-4 py-2">{item.id}</td>
                <td className="border px-4 py-2">{item.sourceId}</td>
                <td className="border px-4 py-2">{item.date}</td>
                <td className="border px-4 py-2">{item.status}</td>
                <td className="border px-4 py-2">{item.customer}</td>
                <td className="border px-4 py-2">{item.email}</td>
                <td className="border px-4 py-2">{item.country}</td>
                <td className="border px-4 py-2">{item.shipping}</td>
                <td className="border px-4 py-2">{item.source}</td>
                <td className="border px-4 py-2">{item.orderType}</td>
                <td className="border px-4 py-2">
                  <FaEdit className="text-blue-500 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8 flex justify-between items-center px-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-3 py-2 bg-blue-400 rounded-md text-white font-semibold disabled:opacity-50"
        >
          <FaAngleLeft />
        </button>
        <span className="text-xl font-semibold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="px-3 py-2 bg-blue-400 rounded-md text-white font-semibold disabled:opacity-50"
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default OrderSummery;
