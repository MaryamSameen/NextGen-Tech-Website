export default function ConfirmationModal({ show, onHide, handleDelete }: any) {
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-lg font-semibold text-gray-800">
            Delete Response
          </h2>
          <button
            onClick={onHide}
            className="text-gray-500 hover:text-gray-700 text-xl font-bold"
          >
            &times;
          </button>
        </div>
        <div className="py-5 text-center">
          <p className="text-gray-700 mb-6">
            Are you sure you want to delete this response?
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={handleDelete}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
            >
              Yes
            </button>
            <button
              onClick={onHide}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
