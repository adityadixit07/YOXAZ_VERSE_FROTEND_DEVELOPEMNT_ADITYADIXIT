import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight, FaEdit } from "react-icons/fa"; // Import pagination and edit icons from react-icons library

const SummaryPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Sample data for demonstration
  const data = [
    {
      id: 1,
      sourceId: "SRC001",
      date: "2024-02-16",
      status: "Shipped",
      customer: "John Doe",
      email: "john@example.com",
      country: "USA",
      shipping: "$10",
      source: "Online",
      orderType: "Retail",
    },
    // Add more data as needed
  ];

  // Paginate data based on current page
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
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">Summary Page</h1>
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-400 w-full">
          <thead>
            <tr className="bg-gray-200">
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
      <div className="mt-8 flex justify-between items-center">
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

export default SummaryPage;
