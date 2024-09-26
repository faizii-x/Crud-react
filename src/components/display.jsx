import { useState } from "react";

function Display() {
  const [data, setData] = useState([]);
  // console.log(data, ...data)

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [id, setId] = useState(0);
  const [isUpdate, setIsUpdate] = useState(false);

  const handleEdit = (id) => {
    setIsUpdate(true);
    const updateEmployee = data.filter((person) => person.id === id);
    if (window.confirm("Are you sure to edit the person?")) {
      setFirstName(updateEmployee[0].firstName);
      setLastName(updateEmployee[0].lastName);
      setAge(updateEmployee[0].age);
      setId(id);
    }
  };
  const handleClear = () => {
    setFirstName("");
    setLastName("");
    setAge("");
    setId(0);
    setIsUpdate(false);
  };
  const handleDelete = (id) => {
    // if (window.confirm("Are you sure to delete the person?")) {
    console.log(data)
      const updateEmployee = data.filter((person) => person.id !== id);
      console.log(updateEmployee, ">>>updateEmployee");
      setData(updateEmployee);
    // }
  };

  const handleUpdate = () => {
    const index = data.map((items) => items.id).indexOf(id);
    console.log(index, ">>>>index");

    const updateEmployee = [...data];

    updateEmployee[index].firstName = firstName;
    updateEmployee[index].lastName = lastName;
    updateEmployee[index].age = age;

    setData(updateEmployee);
    handleClear();
  };

  const handleSave = (e) => {
    e.preventDefault();

    const updateEmployee = [...data];

    const newObject = {
      id: data.length + 1,
      firstName: firstName,
      lastName: lastName,
      age: age,
    };

    updateEmployee.push(newObject);
    setData(updateEmployee);
    handleClear();
  };

  return (
    <>
      <form onSubmit={handleSave} className="flex justify-center p-4 pt-8 mb-8">
        <div className="flex justify-start gap-2">
          <p className="pt-[11px]">First Name:</p>
          <input
          required
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter First Name"
            className="border border-black pl-2"
          />
        </div>
        <div className="flex justify-start gap-2 pl-2">
          <p className="pt-[11px]">Last Name:</p>
          <input
          required
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter Last Name"
            className="border border-black pl-2"
          />
        </div>
        <div className="flex justify-start gap-2 pl-2">
          <p className="pt-[11px]">Age:</p>
          <input
          required
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter Your Age"
            className="border border-black pl-2"
          />
        </div>
        <div className="flex justify-center gap-3 p-1">
          {!isUpdate ? (
            <button
            type="submit"
              // onClick={(e) => handleSave(e)}
              className="bg-blue-700 text-white w-full rounded-lg p-2 hover:bg-opacity-80"
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => handleUpdate()}
              className="bg-blue-700 text-white w-full rounded-lg p-2 hover:bg-opacity-80"
            >
              Update
            </button>
          )}

          <button
            onClick={() => handleClear()}
            className="bg-red-500 text-white w-full rounded-lg p-2 hover:bg-opacity-80"
          >
            Clear
          </button>
        </div>
      </form>
      {/* ........................................ */}

      <div className="overflow-x-auto">
        <table className="table-auto w-full text-center border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 border border-gray-300">Sr.No</th>
              <th className="px-4 py-2 border border-gray-300">Id</th>
              <th className="px-4 py-2 border border-gray-300">First Name</th>
              <th className="px-4 py-2 border border-gray-300">Last Name</th>
              <th className="px-4 py-2 border border-gray-300">Age</th>
              <th className="px-4 py-2 border border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border border-gray-300">
                  {index + 1}
                </td>
                <td className="px-4 py-2 border border-gray-300">{item.id}</td>
                <td className="px-4 py-2 border border-gray-300">
                  {item.firstName}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {item.lastName}
                </td>
                <td className="px-4 py-2 border border-gray-300">{item.age}</td>
                <td className="flex justify-center gap-3 p-1">
                  <button
                    onClick={() => handleEdit(item.id)}
                    className="bg-blue-700 text-white w-[60%] rounded-lg p-2 hover:bg-opacity-80"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 text-white w-[60%] rounded-lg p-2 hover:bg-opacity-80"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Display;
