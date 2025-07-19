"use client";

import { useState, useEffect } from "react";

interface PaginationProps {
  totalItems: number;
  itemsPerPage?: number;
  onPageChange: (startIndex: number, endIndex: number) => void;
}

export default function Pagination({
  totalItems,
  itemsPerPage = 10,
  onPageChange,
}: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(currentPage * itemsPerPage, totalItems);

  useEffect(() => {
    onPageChange(startIndex, endIndex);
  }, [currentPage]);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex justify-between items-center mt-4 flex-wrap gap-4 border-t border-gray-300 pt-4">
      <div className="text-sm text-gray-800">
        Showing {startIndex + 1} to {endIndex} of {totalItems} records
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => goToPage(1)}
          disabled={currentPage === 1}
          className={`px-3 py-1 border rounded text-sm transition
        ${
          currentPage === 1
            ? "bg-gray-100 text-gray-400 border-gray-300 cursor-not-allowed"
            : "bg-white text-purple-700 border-purple-700 hover:bg-purple-700 hover:text-white"
        }
      `}
        >
          ⏮
        </button>
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-1 border rounded text-sm transition
        ${
          currentPage === 1
            ? "bg-gray-100 text-gray-400 border-gray-300 cursor-not-allowed"
            : "bg-white text-purple-700 border-purple-700 hover:bg-purple-700 hover:text-white"
        }
      `}
        >
          ◀
        </button>
        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 border rounded text-sm transition
        ${
          currentPage === totalPages
            ? "bg-gray-100 text-gray-400 border-gray-300 cursor-not-allowed"
            : "bg-white text-purple-700 border-purple-700 hover:bg-purple-700 hover:text-white"
        }
      `}
        >
          ▶
        </button>
        <button
          onClick={() => goToPage(totalPages)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 border rounded text-sm transition
        ${
          currentPage === totalPages
            ? "bg-gray-100 text-gray-400 border-gray-300 cursor-not-allowed"
            : "bg-white text-purple-700 border-purple-700 hover:bg-purple-700 hover:text-white"
        }
      `}
        >
          ⏭
        </button>
      </div>
    </div>
  );
}
