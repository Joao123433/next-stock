import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-6 pt-3 h-screen">
      <header className="flex flex-row justify-between">
        <h1 className="text-3xl font-medium"><Link href="/">REACT STOCK</Link></h1>
        <div className="flex gap-4">
          <Link href="/" className="hover:text-blue-600 text-lg">Início</Link>
          <Link href="/items/Items" className="hover:text-blue-600 text-lg">Itens</Link>
        </div>
      </header>
      <main className="h-5/6 flex flex-col gap-7">{children}</main>
      <footer className="absolute bottom-4"><p className="text-lg">Feito em NextJS</p></footer>
    </div>
  )
}