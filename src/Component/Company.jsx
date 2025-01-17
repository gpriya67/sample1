import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const Company = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleAdd = () => {
    if (name.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Please enter a name.",
      });
      return;
    }

    if (isEditing) {
      const updatedItems = items.map((item) =>
        item.id === currentItem.id ? { ...item, name } : item
      );
      setItems(updatedItems);
      setIsEditing(false);
      setCurrentItem(null);
    } else {
      const newItem = {
        id: items.length + 1,
        name: name,
        Status: "active",
      };
      setItems([...items, newItem]);
    }

    setName("");
    setShowModal(false);
  };

  const handleEdit = (item) => {
    setIsEditing(true);
    setCurrentItem(item);
    setName(item.name);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedItems = items.filter((item) => item.id !== id);
        setItems(updatedItems);
        Swal.fire("Deleted!", "The item has been deleted.", "success");
      }
    });
  };

  const handleChangeToggle = (index) => {
    const updatedItems = items.map((item, i) =>
      i === index
        ? {
            ...item,
            Status: item.Status === "active" ? "notactive" : "active",
          }
        : item
    );
    setItems(updatedItems);

    const statusMessage =
      updatedItems[index].Status === "active"
        ? `${updatedItems[index].name} is available.`
        : `${updatedItems[index].name} is not available.`;

    Swal.fire({
      icon: "info",
      title: statusMessage,
    });
  };

  return (
    <div className=" px-5">
      <div className=" font-bold text-2xl text-red-600 mt-5">Company</div>
      <div className="flex justify-end">
        <button
          className="bg-violet-900 text-white py-1 px-4 mt-5 rounded-md"
          onClick={() => {
            setShowModal(true);
            setIsEditing(false);
            setName("");
          }}
        >
          Add
        </button>
      </div>

      {showModal && (
        <div className="fixed top-0 left-0 bg-gray-400 bg-opacity-50 h-screen w-screen flex justify-center items-center">
          <div className="bg-white p-6 rounded-md shadow-md max-w-sm w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">{isEditing ? "Edit" : "Add"} Company</h2>
              <button
                className="text-red-500 font-bold text-lg"
                onClick={() => setShowModal(false)}
              >
                &times;
              </button>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Name:</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <button
              className="bg-violet-900 text-white py-2 px-4 rounded-md w-full"
              onClick={handleAdd}
            >
              {isEditing ? "Update" : "Add"}
            </button>
          </div>
        </div>
      )}

      <table className="w-full border border-gray-300 mt-5">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-5 text-sm text-left font-bold">S.No</th>
            <th className="p-5 text-sm text-left font-bold">Name</th>
            <th className="p-5 text-sm text-left font-bold">Status</th>
            <th className="p-5 text-sm text-left font-bold">Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item.id} className="border-b">
              <td className="p-5 text-sm">{index + 1}</td>
              <td className="p-5 text-sm">{item.name}</td>
              <td className="p-5 text-sm">
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={item.Status === "active"}
                    onChange={() => handleChangeToggle(index)}
                    className="sr-only peer"
                  />
                  <div
                    className={`w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-green-500 peer-focus:ring-2 peer-focus:ring-green-300 relative`}
                  >
                    <span
                      className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                        item.Status === "active" ? "transform translate-x-5" : ""
                      }`}
                    ></span>
                  </div>
                </label>
              </td>
              <td className="p-5 text-sm">
                <button
                  onClick={() => handleEdit(item)}
                  className="text-blue-500 mr-2"
                >
                  <CiEdit />
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-red-500"
                >
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Company;

