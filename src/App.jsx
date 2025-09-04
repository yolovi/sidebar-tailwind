import React, { useState } from "react";

// ===============================================
// === Redux Slice y Store ===
// *NOTA: En este entorno de archivo único, no podemos importar paquetes de npm.
// He refactorizado la lógica de Redux para usar el estado nativo de React (useState)
// para que el código sea funcional y demostrable. En un proyecto real,
// seguirías el plan de usar Redux como habías propuesto.
// ===============================================

// Los componentes de página no necesitan cambios, ya que no usan el estado de Redux directamente.
const HomePage = () => (
  <div className="p-8">
    <h2 className="text-mint-500 text-4xl font-bold">Inicio</h2>
  </div>
);

const ClientsPage = () => (
  <div className="p-8">
    <h2 className="text-4xl font-bold text-gray-800">Clientes</h2>
  </div>
);

const DocumentsPage = () => (
  <div className="p-8">
    <h2 className="text-4xl font-bold text-gray-800">Documentos</h2>
  </div>
);

// ===============================================
// === Sidebar Component ===
// Ahora recibe el estado y la función para cambiarlo a través de props.
// ===============================================

const Sidebar = ({ isCollapsed, toggleSidebar, setPage }) => {
  const handleLinkClick = (page) => {
    setPage(page);
    // En un proyecto real, esto sería una navegación de React Router:
    // navigate(page);
  };

  const handleLogout = () => {
    // Aquí iría la lógica para cerrar sesión.
    // Por ahora, solo es una acción de ejemplo.
    console.log("Cerrando sesión...");
  };

  const sidebarWidth = isCollapsed ? "w-20" : "w-64";

  // Nota sobre el sistema modular de CSS:
  // En tu `tailwind.config.js`, puedes extender el tema por defecto con tus propios tokens.
  // Por ejemplo, para colores, agregarías:
  // theme: {
  //   extend: {
  //     colors: {
  //       'brand-primary': 'var(--color-brand-primary)',
  //       'brand-secondary': 'var(--color-brand-secondary)',
  //     },
  //     spacing: {
  //       '128': '32rem',
  //       '144': '36rem',
  //     },
  //   },
  // },
  // Luego usarías clases como `bg-brand-primary`.

  return (
    <aside
      className={`relative flex h-screen flex-col bg-gray-900 text-white transition-all duration-300 ease-in-out ${sidebarWidth}`}
    >
      <div className="flex h-16 flex-shrink-0 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          {/* Logo o nombre de la app */}
          <span
            className={`text-mint-500 text-xl font-bold transition-opacity ${
              isCollapsed ? "opacity-0" : "opacity-100"
            }`}
          >
            App
          </span>
        </div>
        <button
          onClick={toggleSidebar}
          // className="p-2 rounded-full hover:bg-var(--color-accent-800) focus:outline-none"
          className="hover:bg-mint-500 rounded-full p-2 focus:outline-none"
        >
          {/* Icono de colapsar/expandir */}
          {isCollapsed ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              />
            </svg>
          )}
        </button>
      </div>

      <nav className="mt-4 flex flex-grow flex-col justify-between">
        <ul className="space-y-2">
          {/* Enlaces de navegación */}
          <li>
            <button
              onClick={() => handleLinkClick("/")}
              className="flex w-full items-center rounded-lg p-3 text-sm font-medium text-gray-300 transition-colors hover:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span
                className={`text-ds-primary-600 ml-3 transition-opacity duration-300 ${
                  isCollapsed ? "opacity-0" : "opacity-100"
                }`}
              >
                Inicio
              </span>
            </button>
          </li>
          <li>
            <button
              onClick={() => handleLinkClick("/clients")}
              className="flex w-full items-center rounded-lg p-3 text-sm font-medium text-gray-300 transition-colors hover:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h-4m2 2v-4m-2 2h4m-2-6a3 3 0 11-6 0 3 3 0 016 0zM13 2a2 2 0 00-2 2v1m-2 15a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2H9a2 2 0 00-2 2v1m0 0H5a2 2 0 00-2 2v10a2 2 0 002 2h2m0 0a2 2 0 002 2h8a2 2 0 002-2v-10"
                />
              </svg>
              <span
                className={`ml-3 transition-opacity duration-300 ${
                  isCollapsed ? "opacity-0" : "opacity-100"
                }`}
              >
                Clientes
              </span>
            </button>
          </li>
          <li>
            <button
              onClick={() => handleLinkClick("/documents")}
              className="flex w-full items-center rounded-lg p-3 text-sm font-medium text-gray-300 transition-colors hover:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5h1a2 2 0 002-2V7a2 2 0 00-2-2H9a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span
                className={`ml-3 transition-opacity duration-300 ${
                  isCollapsed ? "opacity-0" : "opacity-100"
                }`}
              >
                Documentos
              </span>
            </button>
          </li>
        </ul>

        <div className="px-4 pb-4">
          <button
            onClick={handleLogout}
            className="flex w-full items-center rounded-lg p-3 text-sm font-medium text-gray-300 transition-colors hover:bg-ds-primary-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <span
              className={`ml-3 transition-opacity duration-300 ${
                isCollapsed ? "opacity-0" : "opacity-100"
              }`}
            >
              Desconectar
            </span>
          </button>
        </div>
      </nav>
    </aside>
  );
};

// ===============================================
// === Main App Component ===
// Ahora usa el estado directamente.
// ===============================================

export const App = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [page, setPage] = useState("/");

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const renderContent = () => {
    switch (page) {
      case "/":
        return <HomePage />;
      case "/clients":
        return <ClientsPage />;
      case "/documents":
        return <DocumentsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex font-sans antialiased">
      <Sidebar
        isCollapsed={isCollapsed}
        toggleSidebar={toggleSidebar}
        setPage={setPage}
      />
      <main
        className={`flex-1 overflow-auto transition-all duration-300 ease-in-out`}
      >
        <div className="flex h-16 items-center px-4 shadow-sm">
          <h1 className="text-3xl font-bold text-gray-900">
            {page === "/"
              ? "Inicio"
              : page.substring(1).charAt(0).toUpperCase() + page.substring(2)}
          </h1>
        </div>
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
