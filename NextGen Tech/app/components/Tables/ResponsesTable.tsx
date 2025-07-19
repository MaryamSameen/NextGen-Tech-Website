"use client";
import { useState } from "react";
import { FaTrash } from "react-icons/fa6";
import { toast } from "react-toastify";
import ConfirmationModal from "@/app/components/Modals/ConfirmationModal";
import Pagination from "@/app/components/Pagination";
import Spinner from "@/app/components/Spinner";

export default function ResponsesTable({ data, loading }: any) {
  const [showModal, setShowModal] = useState(false);
  const [loadingRead, setLoadingRead] = useState<string | null>(null);
  const [paginatedData, setPaginatedData] = useState([]);
  const [selectedDeleteId, setSelectedDeleteId] = useState<string | null>(null);

  const handlePageChange = (start: number, end: number) => {
    setPaginatedData(data.slice(start, end));
  };

  const handleShowModal = (id: string) => {
    setSelectedDeleteId(id);
    setShowModal((prev) => !prev);
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/messages?id=${selectedDeleteId}`, {
        method: "DELETE",
      });
      if (response?.ok) {
        toast.success("Message deleted successfully");
        window.location.reload();
      }
    } catch (error) {
      toast.error("Failed to delete message");
    }
  };

  const handleMarkAsRead = async (id: any) => {
    setLoadingRead(id);
    try {
      const response = await fetch(`/api/messages/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ isRead: true }),
      });
      if (response?.ok) {
        toast.success("Message marked as read successfully");
        window.location.reload();
        setLoadingRead(null);
      }
    } catch (error) {
      toast.error("Failed to mark message as read");
    }
  };

  return (
    <div className="w-full">
      <div className="container">
        <div className="w-full overflow-x-auto">
          <table className="w-full border-collapse border-spacing-0">
            <thead>
              <tr>
                <th className="bg-[#4e2fa9] text-white text-center py-2 px-1">
                  No.
                </th>
                <th className="bg-[#4e2fa9] text-white text-center py-2 px-1">
                  Name
                </th>
                <th className="bg-[#4e2fa9] text-white text-center py-2 px-1">
                  Email
                </th>
                <th className="bg-[#4e2fa9] text-white text-center py-2 px-1">
                  Subject
                </th>
                <th className="bg-[#4e2fa9] text-white text-center py-2 px-1">
                  Message
                </th>
                <th className="bg-[#4e2fa9] text-white text-center py-2 px-1">
                  Date
                </th>
                <th className="bg-[#4e2fa9] text-white text-center py-2 px-1">
                  Mark as Read
                </th>
                <th className="bg-[#4e2fa9] text-white text-center py-2 px-1">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={12} className="text-center py-4">
                    <Spinner />
                  </td>
                </tr>
              ) : paginatedData?.length === 0 ? (
                <tr>
                  <td colSpan={12} className="text-center py-4">
                    No messages found.
                  </td>
                </tr>
              ) : (
                paginatedData.map((item: any, index: number) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-[#4e2fa90d]"}
                  >
                    <td className="text-center text-black px-2 py-2">
                      {index + 1}
                    </td>
                    <td className="text-center text-black px-2 py-2">
                      {item?.name}
                    </td>
                    <td className="text-center text-black px-2 py-2">
                      {item?.email}
                    </td>
                    <td className="text-center text-black px-2 py-2">
                      {item?.subject}
                    </td>
                    <td className="text-center text-black px-2 py-2">
                      <span title={item?.message}>
                        {item?.message?.length > 20
                          ? `${item?.message?.slice(0, 20)}...`
                        : item?.message}
                      </span>
                    </td>
                    <td className="text-center text-black px-2 py-2">
                      {item?.createdAt?.slice(0, 10)}
                    </td>
                    <td className="text-center px-2 py-2">
                      {item?.isRead ? (
                        <span className="text-green-700 font-medium">Read</span>
                      ) : (
                        <button
                          onClick={() => handleMarkAsRead(item?._id)}
                          className="bg-[#4e2fa9] text-white px-3 py-1 rounded text-sm hover:bg-[#3e2390] disabled:opacity-60"
                          disabled={loadingRead === item?._id}
                        >
                          {loadingRead === item?._id ? (
                            <Spinner />
                          ) : (
                            "Mark as Read"
                          )}
                        </button>
                      )}
                    </td>
                    <td className="text-center px-2 py-2">
                      <div
                        onClick={() => handleShowModal(item?._id)}
                        className="flex justify-center gap-2 cursor-pointer text-red-600 hover:text-red-800"
                      >
                        <FaTrash />
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          {!loading && data?.length > 0 && (
            <Pagination
              totalItems={data.length}
              itemsPerPage={10}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </div>

      <ConfirmationModal
        show={showModal}
        onHide={handleShowModal}
        handleDelete={handleDelete}
      />
    </div>
  );
}
