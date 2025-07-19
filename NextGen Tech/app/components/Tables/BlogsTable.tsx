import { useState } from "react";
import { FaPencil, FaTrash } from "react-icons/fa6";
import { toast } from "react-toastify";
import ConfirmationModal from "../Modals/ConfirmationModal";
import Pagination from "../Pagination";
import { capitalizeWords } from "@/utils/globalFunction";
import Link from "next/link";
import Spinner from "../Spinner";

export default function BlogsTable({ data, loading }: any) {
  console.log("data", data);
  const [showModal, setShowModal] = useState(false);
  const [loadingRead, setLoadingRead] = useState<string | null>(null);
  const [paginatedData, setPaginatedData] = useState([]);
  const [selectedDeleteId, setSelectedDeleteId] = useState<string | null>(null);
  const handlePageChange = (start: number, end: number) => {
    setPaginatedData(data.slice(start, end));
  };
  const handleShowModal = (id: string) => {
    setSelectedDeleteId(id);
    setShowModal(!showModal);
  };
  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/blogs?id=${selectedDeleteId}`, {
        method: "DELETE",
      });
      if (response?.ok) {
        toast.success("Blog deleted successfully");
        window.location.reload();
      }
    } catch (error) {
      toast.error("Failed to delete message");
    }
  };
  const handleStatusChange = async (id: any, value: any) => {
    setLoadingRead(id);
    try {
      const response = await fetch(`/api/update-blog/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ status: value }),
      });
      if (response?.ok) {
        toast.success(`Blog marked as ${value} successfully`);
        window.location.reload();
        setLoadingRead(null);
      } else {
        toast.error("Cannot activate more than 6 blogs");
      }
    } catch (error) {
      toast.error("Failed to update blog");
    }
  };
  return (
    <div className="w-full max-w-full overflow-x-auto">
      <div className="container">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-purple-800 text-white text-center">
              <th className="py-2 px-3">No.</th>
              <th className="py-2 px-3">Title</th>
              <th className="py-2 px-3">Status</th>
              <th className="py-2 px-3">Created At</th>
              <th className="py-2 px-3">Actions</th>
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
                <td colSpan={5} className="text-center py-4">
                  No Blogs found.
                </td>
              </tr>
            ) : (
              paginatedData.map((item: any, index: number) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-purple-50"}
                >
                  <td className="py-2 px-3 text-center">{index + 1}</td>
                  <td className="py-2 px-3 text-center">{item?.title}</td>
                  <td className="py-2 px-3 text-center">
                    {loadingRead === item?._id ? (
                      <Spinner />
                    ) : (
                      <select
                        value={item.status}
                        onChange={(e) =>
                          handleStatusChange(item._id, e.target.value)
                        }
                        className={`px-2 py-1 border rounded text-sm ${
                          item.status === "active"
                            ? "text-green-700 border-green-500"
                            : "text-red-600 border-red-500"
                        }`}
                      >
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                      </select>
                    )}
                  </td>
                  <td className="py-2 px-3 text-center">
                    {item?.createdAt?.slice(0, 10)}
                  </td>
                  <td className="py-2 px-3 text-center">
                    <div className="flex justify-center gap-3">
                      <Link href={`/admin-panel/add-blog?id=${item?._id}`}>
                        <FaPencil className="text-blue-600 hover:text-blue-800 cursor-pointer" />
                      </Link>
                      <div
                        onClick={() => handleShowModal(item._id)}
                        className="text-red-600 hover:text-red-800 cursor-pointer"
                      >
                        <FaTrash />
                      </div>
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

      <ConfirmationModal
        show={showModal}
        onHide={handleShowModal}
        handleDelete={handleDelete}
      />
    </div>
  );
}
