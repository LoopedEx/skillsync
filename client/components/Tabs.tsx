import React from "react";

interface tabprop {
  head: string;
  desc: string;
}
const Tab: React.FC<tabprop> = ({ head, desc }) => {
  return (
    <>
      <li className="py-5">
        <div className="relative focus-within:ring-2 focus-within:ring-indigo-500">
          <h3 className="text-sm font-semibold text-gray-800">{head}</h3>
          <p className="mt-1 text-sm text-gray-600 line-clamp-2">{desc}</p>
        </div>
      </li>
    </>
  );
};

export default Tab;
