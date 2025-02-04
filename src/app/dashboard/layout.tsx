import Link from "next/link";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-black text-white py-4 shadow-md">
        <nav className="container mx-auto flex space-x-6 px-6">
          <Link href="/dashboard" className="hover:text-gray-300 transition">
            Mis Datos
          </Link>
          <Link href="/dashboard/orders" className="hover:text-gray-300 transition">
            Historial de Compras
          </Link>
        </nav>
      </header>

      <main className="flex-1 container mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
        {children}
      </main>
    </section>
  );
}



