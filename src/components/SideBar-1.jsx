import React, { useState } from "react";
// import { FaHome, FaUser } from "react-icons/fa";

export default function TailwindSiderMenu() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sider */}
      <div
        className={`bg-gray-100 border-r transition-all duration-300 ${
          collapsed ? "w-16" : "w-60"
        }`}
      >
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 w-full text-left text-sm text-gray-500 hover:bg-gray-200"
        >
          {collapsed ? "»" : "« Collapse"}
        </button>

        <ul className="mt-4">
          <li className="flex items-center gap-3 px-4 py-2 text-gray-500 hover:bg-gray-200 hover:text-gray-700">
            {/* <FaHome className="text-lg" /> */}
            {!collapsed && "Inicio"}
          </li>
          <li className="flex items-center gap-3 px-4 py-2 text-gray-500 hover:bg-gray-200 hover:text-gray-700">
            {/* <FaUser className="text-lg" /> */}
            {!collapsed && "Usuarios"}
          </li>
        </ul>
      </div>

      {/* Contenido principal */}
      <div className="flex-1 p-6">
        <h1 className="text-xl font-bold">Contenido</h1>
      </div>
    </div>
  );
}
