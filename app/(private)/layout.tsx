export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Navbar */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">Dashboard App</h1>
            </div>
            <nav className="flex gap-4">
              <a href="/" className="text-gray-600 hover:text-gray-900">
                Inicio
              </a>
              <a href="/dashboard" className="text-gray-600 hover:text-gray-900">
                Dashboard
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>
    </div>
  );
}
