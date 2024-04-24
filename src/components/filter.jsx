import Search from "@/assets/Search";
import { useState } from "react";

export default function Filter({ options }) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSearch = () => {
    // Handle search logic here
    console.log("Searching for:", selectedOption);
  };

  return (
    <div className="max-w-xl mx-auto">
      <div className="w-full flex bg-white shadow-md rounded-md  text-black text-sm">
        <select
          className=" block w-full pl-2 text-[#ABA3A3] max-w-40 rounded-md  bg-white"
          onChange={handleChange}
          value={selectedOption}
        >
          <option value="All Categories">All Categories</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className="h-full w-[1px] bg-slate-300"></div>
        <input
          type="text"
          className="form-input block w-full p-2 flex-1 rounded-md "
          placeholder="Enter search term"
        />

        <button
          className="bg-[#B6B6B6]  text-white font-bold py-2 px-4 rounded-md"
          onClick={handleSearch}
        >
          <Search />
        </button>
      </div>
    </div>
  );
}
