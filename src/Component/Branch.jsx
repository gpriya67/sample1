import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const Branch = () => {
  const [branches, setBranches] = useState([]);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentBranch, setCurrentBranch] = useState(null);
  const [showModal, setShowModal] = useState(false);

  
  const handleAddOrUpdate = () => {
    if (name.trim() === "" || company.trim() === "" || location.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Please fill all fields before proceeding.",
      });
      return;
    }

    if (isEditing) {
      const updatedBranches = branches.map((branch) =>
        branch.id === currentBranch.id
          ? { ...branch, name, company, location }
          : branch
      );
      setBranches(updatedBranches);
      setIsEditing(false);
      setCurrentBranch(null);
    } else {
      const newBranch = {
        id: branches.length + 1,
        name,
        company,
        location,
      };
      setBranches([...branches, newBranch]);
    }

    setName("");
    setCompany("");
    setLocation("");
    setShowModal(false);
  };

 
  const handleEdit = (branch) => {
    setIsEditing(true);
    setCurrentBranch(branch);
    setName(branch.name);
    setCompany(branch.company);
    setLocation(branch.location);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedBranches = branches.filter((branch) => branch.id !== id);
        setBranches(updatedBranches);
        Swal.fire("Deleted!", "The branch has been deleted.", "success");
      }
    });
  };

  return (
    <div className=" px-5">
      <div className=" font-bold text-2xl text-red-600 mt-5">Branch</div>
      <div className="flex justify-end">
        <button
          className="bg-violet-900 text-white py-1 px-4 mt-5 rounded-md"
          onClick={() => {
            setShowModal(true);
            setIsEditing(false);
            setName("");
            setCompany("");
            setLocation("");
          }}
        >
          Add Branch
        </button>
      </div>

    
      {showModal && (
        <div className="fixed top-0 left-0 bg-gray-400 bg-opacity-50 h-screen w-screen flex justify-center items-center">
          <div className="bg-white p-6 rounded-md shadow-md max-w-sm w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">
                {isEditing ? "Edit" : "Add"} Branch
              </h2>
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
                placeholder="Enter branch name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Company:</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter company name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Location:</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <button
              className="bg-violet-900 text-white py-2 px-4 rounded-md w-full"
              onClick={handleAddOrUpdate}
            >
              {isEditing ? "Update" : "Add"}
            </button>
          </div>
        </div>
      )}

      {/* Table */}
      <table className="w-full border border-gray-300 mt-5">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-5 text-sm text-left font-bold">S.No</th>
            <th className="p-5 text-sm text-left font-bold">Name</th>
            <th className="p-5 text-sm text-left font-bold">Company</th>
            <th className="p-5 text-sm text-left font-bold">Location</th>
            <th className="p-5 text-sm text-left font-bold">Action</th>
          </tr>
        </thead>
        <tbody>
          {branches.map((branch, index) => (
            <tr key={branch.id} className="border-b">
              <td className="p-5 text-sm">{index + 1}</td>
              <td className="p-5 text-sm">{branch.name}</td>
              <td className="p-5 text-sm">{branch.company}</td>
              <td className="p-5 text-sm">{branch.location}</td>
              <td className="p-5 text-sm">
                <button
                  onClick={() => handleEdit(branch)}
                  className="text-blue-500 mr-2"
                >
                  <CiEdit />
                </button>
                <button
                  onClick={() => handleDelete(branch.id)}
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

export default Branch;
