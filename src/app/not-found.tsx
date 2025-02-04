import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 text-white">
      <div className="text-center p-8 bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg">
        <h1 className="text-6xl font-extrabold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Página No Encontrada</h2>
        <p className="text-lg mb-6">
          Lo sentimos, no pudimos encontrar la página que buscabas.
        </p>
        <Link 
          href="/" 
          className="inline-block px-6 py-3 text-lg font-medium bg-white text-indigo-600 rounded-lg shadow-md hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-200"
        >
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}
