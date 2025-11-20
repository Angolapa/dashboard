export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-gray-800">Inicio</h1>
        <p className="mb-8 text-xl text-gray-600">
          Bienvenido a tu aplicación con Next.js y Tailwind CSS
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/dashboard"
            className="rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
          >
            Ir al Dashboard
          </a>
        </div>
      </div>
    </main>
  );
}
