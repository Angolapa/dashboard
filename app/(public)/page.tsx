export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">
          Inicio
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Bienvenido a tu aplicación con Next.js y Tailwind CSS
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="/dashboard"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Ir al Dashboard
          </a>
        </div>
      </div>
    </main>
  );
}
